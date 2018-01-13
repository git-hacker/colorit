import base64
import io

from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

import resnet
from utils import *


@api_view(['GET', 'POST'])
def test(request):
    ar = load_image('2.jpg')
    print(ar.shape)
    image = array2image(ar)
    buffer = io.BytesIO()
    image.save(buffer, format='jpeg')
    b64str = base64.b64encode(buffer.getvalue())
    return Response(b64str)


@api_view(['GET'])
def test1(request):
    image = load_image('2.jpg')
    b64str = base64.b64encode(image)
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
        b64str = base64.b64encode(image)
        # response = HttpResponse(content_type='image/jpeg')
        # image.save(response, 'jpeg')
        # return response

    return Response(serializer.errors)
