import tensorflow as tf

from utils import *

epochs = 1
max_iter = 1000


graph = tf.Graph()
with graph.as_default():
    input_raw = tf.placeholder(tf.float32, shape=(None, image_size * 2, image_size * 2, 3))
    # input_image = tf.reshape(input_raw, [-1, image_size, image_size, 1])
    actual_image = tf.placeholder(tf.float32, shape=(None, image_size, image_size, 3))

    conv1 = tf.layers.conv2d(
        inputs=input_raw,
        filters=32,
        kernel_size=[5, 5],
        padding='same',
        activation=tf.nn.relu
    )
    pool1 = tf.layers.max_pooling2d(
        inputs=conv1,
        pool_size=[2, 2],
        strides=2
    )

    conv2 = tf.layers.conv2d(
        inputs=pool1,
        filters=64,
        kernel_size=[5, 5],
        padding='same',
        activation=tf.nn.relu
    )
    pool2 = tf.layers.average_pooling2d(
        inputs=conv2,
        pool_size=[2, 2],
        strides=2
    )

    _, width, height, depth = pool2.shape
    pool2_flat = tf.reshape(pool2, [-1, width * height * depth])

    hidden_fc_1 = tf.layers.dense(
        inputs=pool2_flat,
        units=60,
        activation=tf.nn.relu
    )
    # out_layer_flat = tf.layers.dense(
    #     inputs=hidden_fc_1,
    #     units=256*256*3,
    #     activation=tf.nn.tanh,
    #     use_bias=True
    # )
    w = tf.Variable(
        tf.random_uniform([60, image_size * image_size * 3], -1.0, 1.0),
        name='output_layer_weights'
    )
    b = tf.Variable(tf.zeros([image_size * image_size * 3]))
    out_layer_flat = tf.nn.sigmoid(tf.matmul(hidden_fc_1, w) + b)

    output_image = tf.reshape(out_layer_flat, [-1, image_size, image_size, 3])
    _, width, height, depth = actual_image.shape
    actual_flat = tf.reshape(actual_image, [-1, width * height * depth])
    loss = tf.reduce_mean(tf.square(actual_flat - out_layer_flat))

    optimizer = tf.train.GradientDescentOptimizer(.003).minimize(loss)

def generate_batches(batch_size):
    gray_images = load_images(INPUT_DIR)
    rgb_images = load_images(OUTPUT_DIR)
    while True:
        for i in range(0, len(gray_images), batch_size):
            yield gray_images[i : i + batch_size], rgb_images[i : i + batch_size]

batches = generate_batches(4)
test_images = load_images(TEST_DIR)

with tf.Session(graph=graph) as session:
    tf.global_variables_initializer().run()
    for i in range(max_iter):
        input_images, actual_images = next(batches)
        feed = {
            input_raw: input_images,
            actual_image: actual_images
        }
        _, cost = session.run([optimizer, loss], feed_dict=feed)
        if i % 10 == 0:
            print(cost)
    test_result = session.run(output_image, feed_dict={
        input_raw: test_images
    })
    display_image(*test_result, col=1)
