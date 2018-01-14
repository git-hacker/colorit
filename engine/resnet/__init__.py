import os

import tensorflow as tf

from utils import rgb2gray, crop_image, image_size

BASE = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE, 'models')

MODEL_NAME = 'model.tfmodel'
MODEL_PATH = os.path.join(MODEL_DIR, MODEL_NAME)

with open(MODEL_PATH, 'rb') as fin:
    model_data = fin.read()


def validate(image):
    if len(image.shape) == 3:
        image = rgb2gray(image)
    assert len(image.shape) == 2
    image = crop_image(image)
    return image.reshape(1, 224, 224, 1)


def gen(*origin):
    """
    genenrate RGB images based on origin image list
    :param origin: a list of grayscale images
    :return: RGB image list
    """
    images = []
    with tf.Session() as session:
        graph_def = tf.GraphDef()
        graph_def.ParseFromString(model_data)

        batch_input = tf.placeholder("float", [1, None, None, 1])
        tf.import_graph_def(graph_def, input_map={"grayscale": batch_input}, name="")

        for image in origin:
            image = validate(image)
            output_layer = session.graph.get_tensor_by_name("inferred_rgb:0")
            rgb = session.run(output_layer, feed_dict={batch_input: image})
            rgb = rgb.reshape(image_size, image_size, 3)
            images.append(rgb)
        if len(images) == 1:
            return images[0]
        return images