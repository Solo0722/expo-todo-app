import * as React from "react";
import { Audio } from "expo-av";

export const startRecording = async ({ setRecording }) => {
  try {
    console.log("Requesting permissions..");
    await Audio.requestPermissionsAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    console.log("Starting recording..");
    const { recording } = await Audio.Recording.createAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );
    setRecording(recording);
    console.log("Recording started");
  } catch (err) {
    console.error("Failed to start recording", err);
  }
};

export const stopRecording = async ({ setRecording, recording }) => {
  console.log("Stopping recording..");
  setRecording(undefined);
  await recording.stopAndUnloadAsync();
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
  });
  const uri = recording.getURI();
  console.log("Recording stopped and stored at", uri);
};
