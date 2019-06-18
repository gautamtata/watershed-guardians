import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './infopane.css'

class InfoPane extends Component{
     render(){
         return(
     <Tabs className = 'react-tabs'>
        <TabList className = 'react-tab-list'>
        <Tab>Instructions</Tab>
        <Tab>About</Tab>
        <Tab>what can you do?</Tab>
        <Tab>About the tests</Tab>
        </TabList>

        <br />
        

        <TabPanel>
        <p>
           1. The markers on the map are locations of our sampling sites. 
           <br /> <br />
           2. Click on the marker to render graphs specific to that site. 
           <br /> <br />
           3. Each graph is of a scientific test conducted on the water source.
           <br /> <br /> 
        </p>
        
        </TabPanel>
        <TabPanel className = 'about-panel'>
        <p>
        Watershed Guardians is a program that provides an opportunity for anyone to monitor the water quality in the watershed habitats in Monterey county.
        Museum educator will providing help covering the steelhead trout life cycle, human activities that threaten steelhead survival, and the basics of water quality testing.
        </p>
        
        </TabPanel>
        <TabPanel>
        <p>
        What Can You Do?
        If you want to help keep our waters clean, there are many things you can do to help. You can prevent water pollution of nearby rivers and lakes as well as groundwater and drinking water by following some simple guidelines in your everyday life: <br />
        1. Conserve water by <b>turning off the tap when running water</b> is not necessary. This helps prevent water shortages and reduces the amount of contaminated water that needs treatment. <br />
        2. Be careful about what you throw down your sink or toilet. Don’t throw <b>paints, oils or other forms of litter</b> down the drain. Use environmentally household products, such as <em>washing powder, household cleaning agents and toiletries.</em> <br />
        3 .Don’t throw litter into rivers, lakes or oceans. Help clean up any litter you see on beaches or in rivers and lakes, make sure it is safe to collect the litter and put it in a nearby dustbin. 
        </p>
        </TabPanel>
        <TabPanel>
        <p>
            <b>1. PH:</b> The pH of river water is the measure of how acidic or basic the water is on a scale of 0-14. It is a measure of hydrogen ion concentration. U.S. natural water falls between 6.5 and 8.5 on this scale with 7.0 being neutral. The optimum pH for river water is around 7.4. <br />
            <b>2. temperature:</b> Temperature impacts the rates of metabolism and growth of aquatic organisms, rate of plants' photosynthesis, solubility of oxygen in river water, and organisms' sensitivity to disease, parasites, and toxic materials. At a higher temperature, plants grow and die faster, leaving behind matter that requires oxygen for decomposition.<br />
            <b>3. Depth:</b> The depth of a river is an indicator of many factors including: rain that year,groundwater depletion or an obstruction in the course of the river. <br />
            <b>4. Dissolved Oxygen:</b> An adequate supply of dissolved oxygen gas is essential for the survival of aquatic organisms. A deficiency in this area is a sign of an unhealthy river. There are a variety of factors affecting levels of dissolved oxygen. The atmosphere is a major source of dissolved oxygen in river water. 
        </p>
       
        </TabPanel>
  </Tabs>
         );
     }
 }  
  
export default InfoPane;


