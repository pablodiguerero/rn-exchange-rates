import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { HttpStatus } from "../../types";

export const ExchangeRate = () => {
  const exhcnageRateStatus: HttpStatus = useSelector(
    (state: RootState) => state.echange.currentRateLoadingStatus
  );

  const exhcnageRate: number = useSelector(
    (state: RootState) => state.echange.currentRate
  );

  return (
    <View>
      <Text>
        {exhcnageRateStatus === "fulfilled"
          ? `Current rate: ${exhcnageRate}`
          : exhcnageRateStatus === "rejected"
          ? "Exchange rate loding failed"
          : "No rates loaded"}
      </Text>
    </View>
  );
};
