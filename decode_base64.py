import base64


#encoded = 'SG9zdEFubm91bmNlbWVudBUAAAAAAAAAc2lhY29pbi5kZG5zLm5ldDo5OTgyZWQyNTUxOQAAAAAAAAAAACAAAAAAAAAAEi17Esv4vDC7fUxAdMN5HodBuIyiJvf/UlBNhPMrIBihQLQOj5HR5XNk/0Wi+wLNHDosBkMIXhJcvuswYXqpBPSDxDHY0oT8Goq92fqhPgrthofg/dm894MC6R+Li4MK'
encoded = raw_input('Introdueix el camp codificat en base64: ')

print "Encoded: " + str(encoded)
decoded = base64.b64decode(encoded)

print decoded

file = open('decoded','w')
file.write(decoded)
file.close()
