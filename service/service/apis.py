import base64
import io

from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

import resnet
from service.settings import BASE_DIR
from utils import *

tmp = os.path.join(BASE_DIR, '2.jpg')
@api_view(['GET', 'POST'])
def test(request):
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
        print("image passed: ", grayscale_raw)
        grayscale = load_image(grayscale_raw)
        print("convert to array, shape:", grayscale.shape)
        rgb = resnet.gen(grayscale)
        print("RGB generation, shape:", rgb.shape)
        image = array2image(rgb)
        buffer = io.BytesIO()
        image.save(buffer, format='jpeg')
        b64str = base64.b64encode(buffer.getvalue())
        print("base 64 string length: ", len(b64str))
        return Response(b64str)

    return Response(serializer.errors)
