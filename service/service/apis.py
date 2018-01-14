import base64
import io
import os
import sys

from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

from service.settings import BASE_DIR

outer_path = os.path.dirname(BASE_DIR)

sys.path.append(outer_path)

import resnet

from utils import *


@api_view(['GET', 'POST'])
def test(request):
    tmp = os.path.join(outer_path, '2.jpg')
    print(tmp)
    ar = load_image(tmp)
    image = array2image(ar)
    buffer = io.BytesIO()
    image.save(buffer, format='jpeg')
    b64str = base64.b64encode(buffer.getvalue())
    return Response(b64str)


class ColorizeSerializer(serializers.Serializer):
    image = serializers.ImageField()


@api_view(['POST'])
def colorize(request):
    serializer = ColorizeSerializer(data=request.data)
    if serializer.is_valid():
        grayscale_raw = serializer.validated_data.get('image')
        grayscale = load_image(grayscale_raw)
        rgb = resnet.gen(grayscale)
        image = array2image(rgb)
        buffer = io.BytesIO()
        image.save(buffer, format='jpeg')
        b64str = base64.b64encode(buffer.getvalue())

        print("\nimage passed: ", grayscale_raw, flush=True)
        print("convert to array, shape:", grayscale.shape, flush=True)
        print("RGB generation, shape:", rgb.shape, flush=True)
        print("base 64 string length: ", len(b64str), flush=True, end='\n\n')

        return Response(b64str)

    return Response(serializer.errors)
