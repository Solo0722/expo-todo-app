import * as DocumentPicker from "expo-document-picker";

export const filePicker = async (type) => {
  // No permissions request is necessary for launching the image library
  let result = await DocumentPicker.getDocumentAsync({
    copyToCacheDirectory: true,
    type: `${type}/*`,
  });

  if (result.type == "success") {
    return result;
  }
};
