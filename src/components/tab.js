import React, { useState, useEffect } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import moment from 'moment';
import 'react-tabs/style/react-tabs.css';

const AtTab = () => {
  const [tabContent, setTabContent] = useState([]);

  useEffect(() => {
    const currentDate = moment();
    const firstDayOfMonth = moment(currentDate).startOf('month');
    const lastDayOfMonth = moment(currentDate).endOf('month');

    let currentWeekStart = moment(firstDayOfMonth).startOf('week');
    let currentWeekEnd = moment(firstDayOfMonth).endOf('week');
    const weeks = [];

    while (currentWeekStart.isSameOrBefore(lastDayOfMonth)) {
      weeks.push({
        start: moment(currentWeekStart),
        end: moment(currentWeekEnd),
      });
      currentWeekStart.add(1, 'week').startOf('week');
      currentWeekEnd.add(1, 'week').endOf('week');
    }

    const tabContents = weeks.map((week, index) => (
      <TabPanel key={`tab${index + 1}`}>
        {week.start.format('YYYY/MM/DD')} - {week.end.format('YYYY/MM/DD')}
      </TabPanel>
    ));

    setTabContent(tabContents);
  }, []);

  return (
    <Tabs className="ml-[5%]">
      <TabList>
        <Tab>第一週</Tab>
        <Tab>第二週</Tab>
        <Tab>第三週</Tab>
        <Tab>第四週</Tab>
        <Tab>第五週</Tab>
      </TabList>

      {tabContent}
    </Tabs>
  );
};

export default AtTab;
