import sys
import json

# TODO : 다음 스크립트 tflite로 모델 불러와서 이미지 저장까지 하기
"""
# 이미지 변조 실험

seg_model = YOLO("/content/drive/MyDrive/save_your_biometric_informations/runs/segment/train5/weights/best.pt")

data = '/content/drive/MyDrive/save_your_biometric_informations/runs/영석1.jpg'
image = np.array(Image.open(data))
h, w, _ = image.shape
results = seg_model.predict(data)

for result in results:
  masks = result.masks
  boxes = result.boxes

if masks is not None:
  for mask, box in zip(masks.data, boxes.data):
    mask = cv2.resize(np.array(mask.cpu()).astype(np.uint8), dsize=(w, h), interpolation=cv2.INTER_CUBIC)
    bbox = int(box[1]), int(box[3]), int(box[0]), int(box[2])
    mask = mask[bbox[0]:bbox[1], bbox[2]:bbox[3]]
    sliced_img = image[bbox[0]:bbox[1], bbox[2]:bbox[3]]

    masked_img1 = mask * sliced_img[:, :, 0]
    masked_img2 = mask * sliced_img[:, :, 1]
    masked_img3 = mask * sliced_img[:, :, 2]
    masked_img = cv2.merge((masked_img1, masked_img2, masked_img3))

    masked_img = cv2.resize(masked_img, dsize=(128, 128), interpolation=cv2.INTER_CUBIC)
    masked_img = np.array(masked_img) / 255.0

    output = model.predict(masked_img.reshape(1, 128, 128, 3))
    output = cv2.resize(output[0], dsize=(bbox[3]-bbox[2], bbox[1]-bbox[0]), interpolation=cv2.INTER_CUBIC)
    
    sliced_img = image[bbox[0]:bbox[1], bbox[2]:bbox[3]]

    mask = mask ^ True
    masked_img1 = mask * sliced_img[:, :, 0]
    masked_img2 = mask * sliced_img[:, :, 1]
    masked_img3 = mask * sliced_img[:, :, 2]
    masked_img = cv2.merge((masked_img1, masked_img2, masked_img3))

    output = np.add(masked_img, (output * 255).astype(np.int8)).astype(np.uint8)
    image[bbox[0]:bbox[1], bbox[2]:bbox[3]] = output

  plt.imshow(image)
  plt.show()
"""
def inference(model_path : str, inputs : list):
  interpreter = tf.lite.Interpreter(model_path=model_path)
  interpreter.allocate_tensors()

  input_index = interpreter.get_input_details()[0]['index']
  output_index = interpreter.get_output_details()[0]['index']

  preds = list()
  for idx, input in enumerate(inputs):
    image = np.array(Image.open(input)).astype(np.float32) / 255.
    image = tf.expand_dims(image, axis=0)

    interpreter.set_tensor(input_index, image)
    interpreter.invoke()
    preds.append(interpreter.get_tensor(output_index))

  print(json.dumps(result_list))

if __name__ == '__main__':
    inference("/path/to/yolo-seg.tflite", list(sys.argv[1:])