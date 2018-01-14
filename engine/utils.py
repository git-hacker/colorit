import shutil

import matplotlib
import numpy as np
import skimage.transform
from PIL import Image
from matplotlib import pyplot as plt
from scipy import misc

from settings import *

image_size = 224

def _clear_dir(dir):
    try:
        shutil.rmtree(dir)
    except FileNotFoundError:
        pass
    os.mkdir(dir)


def load_image(file_path, resize=False):
    img = Image.open(file_path)
    if resize:
        s = resize[0]
        W, H = img.size
        r = W / H
        if r < 1:
            r = 1 / r
        x = s * r
        img.thumbnail((x, x), Image.ANTIALIAS)
        img = img.resize((s, s), Image.ANTIALIAS)
    img = np.array(img)
    img = img / (256 - 1)
    return img


def array2image(ndarray):
    raw = ndarray * 255
    img = Image.fromarray(raw.astype('uint8'), 'RGB')
    return img


def save_image(nparray, file_path):
    misc.imsave(file_path, nparray)


def load_images(dir, resize=False):
    paths = get_image_files(dir)
    image_list = list(map(lambda p: load_image(p, resize), paths))
    return np.stack(image_list)


def rgb2gray(rgb):
    return np.dot(rgb[..., :3], [.299, .587, .114])


def is_image(path):
    if path.startswith('.'):
        return False
    try:
        Image.open(path)
    except Exception:
        return False
    return True


def get_image_files(dir):
    files = os.listdir(dir)
    paths = list(map( lambda f: os.path.join(dir, f), files))
    return list(filter(is_image, paths))


def display_image(*images, col=None):
    if col is None:
        col = len(images)
    plt.figure(figsize=(8, 4.5))
    row = np.math.ceil(len(images) / col)
    for i, image in enumerate(images):
        plt.subplot(row, col, i + 1)
        plt.imshow(image, cmap=matplotlib.cm.Greys_r)
    plt.show()


def batch_convert_gray(origin_dir, dest_dir):
    _clear_dir(dest_dir)
    paths = get_image_files(origin_dir)
    for path in paths:
        file_name = os.path.basename(path)
        dest_path = os.path.join(dest_dir, file_name)
        origin = load_image(path)
        gray = rgb2gray(origin)
        save_image(gray, dest_path)


# def dump_images(out_dir, resize):
#     _clear_dir(out_dir)
#     paths = get_image_files(RAW_DIR)
#     for path in paths:
#         file_name = os.path.basename(path)
#         dest_path = os.path.join(out_dir, file_name)
#         origin = load_image(path, resize)
#         save_image(origin, dest_path)


def crop_images(dir):
    paths = get_image_files(dir)
    for path in paths:
        origin = load_image(path)
        cropped = crop_image(origin)
        save_image(cropped, path)


def crop_image(image):
    h, w = image.shape[:2]
    if h == w:
        return image
    width = min(h, w)
    yy = int((h - width) / 2)
    xx = int((w - width) / 2)
    cropped = image[yy : yy + width, xx: xx + width]
    return skimage.transform.resize(cropped, (224, 224))


def get_dir(prefix, suffix):
    dir_name = "{}-{}".format(prefix, suffix)
    return os.path.join(IMAGE_ROOT, dir_name)


if __name__ == '__main__':
    origin_dir = get_dir('chengdu', 'origin')
    dest_dir = get_dir('chengdu', 'gray')
    # convert_gray(origin_dir, dest_dir)
