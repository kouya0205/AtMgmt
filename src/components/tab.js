import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AtTab = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>第一週</Tab>
                <Tab>第二週</Tab>
                <Tab>第三週</Tab>
                <Tab>第四週</Tab>
                <Tab>第五週</Tab>
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 5</h2>
            </TabPanel>
        </Tabs>
    )
}
export default AtTab