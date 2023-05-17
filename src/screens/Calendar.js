import { Platform, StatusBar, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Calendar as Calender } from "react-native-calendars";
import { Heading, View } from "native-base";
import { colors } from "../theme/theme";
import moment from "moment";
import FabComp from "../components/FabComp";

const Calendar = () => {
  const [markedDate, setMarkedDate] = useState({
    [moment().format("yyyy-MM-DD")]: { selected: true, marked: true },
  });

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
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
      <View style={styles.bodyContainer}>
        <Heading
          mt={4}
          fontSize={"sm"}
          fontWeight={"bold"}
          textAlign="center"
          color={"coolGray.500"}
        >
          No tasks for the day.
        </Heading>
        <Heading
          mt={4}
          fontSize={"sm"}
          fontWeight={"bold"}
          textAlign="center"
          color={"coolGray.500"}
        >
          Click + to create your tasks.
        </Heading>
        <FabComp />
      </View>
    </View>
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
  backgroundColor: `${colors.itemColor}`,
  calendarBackground: `${colors.itemColor}`,
  textSectionTitleColor: "#b6c1cd",
  textSectionTitleDisabledColor: "#d1d5db",
  selectedDayBackgroundColor: `${colors.primaryColor}`,
  selectedDayTextColor: "#ffffff",
  todayTextColor: `${colors.primaryColor}`,
  dayTextColor: "#2d4150",
  textDisabledColor: "#d1d5db",
  dotColor: "#00adf5",
  selectedDotColor: "#ffffff",
  arrowColor: "#6b7280",
  disabledArrowColor: "#d1d5db",
  monthTextColor: "#6b7280",
  indicatorColor: `${colors.primaryColor}`,
  textDayFontFamily: "bellota-regular",
  textMonthFontFamily: "bellota-bold",
  textDayHeaderFontFamily: "bellota-bold",
  textDayFontWeight: "300",
  textMonthFontWeight: "bolder",
  textDayHeaderFontWeight: "bolder",
  textDayFontSize: 12,
  textMonthFontSize: 12,
  textDayHeaderFontSize: 12,
};
