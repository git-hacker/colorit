import cv2
# import os
# a = os.getcwd()
# print(a)
# for root. dirs, files in os.walk(os.getcwd()):
#     for item in files:
#         file_name = os.path.splitext(items)[0]
#         file_txt = os.path.splitext(item)[1]
#         if file_txt in ('jpg', 'png'):
#             img = cv2.imread(items, 0)
#             cv2.imwrite(file_name + '_deal.' + file_txt, img)
img = cv2.imread('8.jpg', 0)
cv2.imwrite('8_deal.jpg', img)


