import { BlurView } from "expo-blur";
import { TextInput } from "react-native";

export default function NameInput({
  visible,
  value,
  onChangeText,
  onSubmitEditing,
  hint,
}) {
  if (!visible) return null; // 안 보일 때는 렌더 안 함
  return (
    <BlurView
      intensity={10}
      tint="light"
      style={{
        width: "95%",
        borderRadius: 15,
        marginTop: 30,
      }}
    >
      <TextInput
        style={{
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          paddingVertical: 15,
          paddingHorizontal: 20,
          fontSize: 12,
          fontFamily: "Galmuri9",
          borderRadius: 15,
          shadowColor: "#000",
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
        }}
        placeholder={hint}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing} // 엔터 눌렀을 때
        returnKeyType="done"
      />
    </BlurView>
  );
}
