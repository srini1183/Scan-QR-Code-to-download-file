import pyqrcode # to create qrcode
import png # to save qrcode in png format

url = pyqrcode.create('https://4f4eb16fdb27.ngrok.io/download') # provide data to reside inside the qrcode as argument
url.png('My_image_qr_code.png',scale = 8) #save the qrcode as png file