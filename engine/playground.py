import base64
import io
import random

import resnet
from utils import *


def get_random_image_file(dir):
    l = get_image_files(dir)
    return random.choice(l)


def test_random_image():
    random_file = get_random_image_file(get_dir('world', 'gray'))
    test_image = load_image(random_file)

    gen = resnet.gen(test_image)
    display_image(test_image, gen)


def test_multiple_images():
    folder = get_dir('world', 'gray')
    image_list = [load_image(p) for p in get_image_files(folder)]
    # for image in image_list:
    #     gen = resnet.gen(image)
    #     display_image(image, *gen)
    rgb_list = resnet.gen(*image_list[:10])
    for i, rgb in enumerate(rgb_list):
        display_image(image_list[i], rgb)


def test_sample_image():
    target_file = os.path.join(get_dir('chengdu', 'gray'), '花牌坊街.jpg')
    test_image = load_image(target_file)
    gen = resnet.gen(test_image)
    display_image(test_image, gen)


if __name__ == '__main__':
    # test_multiple_images()
    # test_sample_image()
    p1 = os.path.join(get_dir('chengdu', 'origin'), '花牌坊街.jpg')
    p2 = 'service/audrey.jpg'
    img_array = load_image(p1)
    img = array2image(img_array)
    buffer = io.BytesIO()
    img.save(buffer, format='jpeg')
    s = base64.b64encode(buffer.getvalue())
