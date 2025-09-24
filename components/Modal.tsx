import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Text } from "./Themed";

export default function Modal() {
  return (
    <BottomSheet snapPoints={['100%', '30%']} index={-1} >
      <BottomSheetView>
        <Text>Modal</Text>
      </BottomSheetView>
    </BottomSheet>
  )
}