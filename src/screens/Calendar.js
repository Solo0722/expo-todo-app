import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Calendar as Calender } from "react-native-calendars";
import { Heading, View } from "native-base";
import { colors } from "../theme/theme";
import moment from "moment";
import FabComp from "../components/FabComp";
import TabHeader from "../components/TabHeader";
import EmptyComp from "../components/EmptyComp";

const Calendar = () => {
  const [markedDate, setMarkedDate] = useState({
    [moment().format("yyyy-MM-DD")]: { selected: true, marked: true },
  });

  return (
    <SafeAreaView>
      <View w={"full"} h="full">
        <View mt="2">
          <Calender
            onDayPress={(day) => {
              let dateString = day.dateString;
              let markedFormat = {
                [dateString]: {
                  selected: true,
                  marked: true,
                },
              };
              setMarkedDate(markedFormat);
            }}
            onDayLongPress={(day) => {
              console.log("selected day", day);
            }}
            markedDates={markedDate}
            monthFormat={"MMMM yyyy"}
            hideExtraDays={false}
            onPressArrowLeft={(subtractMonth) => subtractMonth()}
            onPressArrowRight={(addMonth) => addMonth()}
            enableSwipeMonths={true}
            theme={calendarTheme}
          />
        </View>
        <View flex="1" alignItems="center" justifyContent={"center"}>
          <EmptyComp
            title="No tasks available!"
            subText="Click the + to create tasks"
            showImage={false}
          />
          <FabComp />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: { flex: 1 },
  calendarContainer: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    backgroundColor: `${colors.itemColor}`,
  },
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const calendarTheme = {
  // todayBackgroundColor: `${colors.primaryColor}`,
  backgroundColor: `${colors.backgroundColor}`,
  calendarBackground: `${colors.backgroundColor}`,
  textSectionTitleColor: "#fff",
  textSectionTitleDisabledColor: "#d1d5db",
  selectedDayBackgroundColor: `${colors.primaryColor}`,
  selectedDayTextColor: "#ffffff",
  todayTextColor: `${colors.primaryColor}`,
  dayTextColor: "#fff",
  textDisabledColor: "#999",
  dotColor: "#00adf5",
  selectedDotColor: "#ffffff",
  arrowColor: "#fff",
  disabledArrowColor: "#d1d5db",
  monthTextColor: "#fff",
  indicatorColor: `${colors.primaryColor}`,
  textDayFontFamily: "plusSans-regular",
  textMonthFontFamily: "plusSans-bold",
  textDayHeaderFontFamily: "plusSans-bold",
  textDayFontWeight: "300",
  textMonthFontWeight: "bolder",
  textDayHeaderFontWeight: "bolder",
  textDayFontSize: 12,
  textMonthFontSize: 14,
  textDayHeaderFontSize: 12,
};
