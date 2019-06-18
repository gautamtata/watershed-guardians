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
           <b>1. The markers on the map are locations of our sampling sites. <br /></b> 
           <b>2. Click on the marker to render graphs specific to that site. <br /></b>  
           <b>3. Each graph is of a scientific test conducted on the water source. <br /></b> 

           <b>4. To get a 3D view hold down the right key of mouse and move :)</b> 
        </p>
        
        </TabPanel>
        <TabPanel className = 'about-panel'>
        <p>
            <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
            is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
            Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
            attack by Bowser. She often plays the damsel in distress role within the series and
            is the lead female. She is often portrayed as Mario's love interest and has appeared
            in Super Princess Peach, where she is the main playable character.
        </p>
        
        </TabPanel>
        <TabPanel>
        <p>
            <b>1. Keep out oils, fat, or grease from the sink.</b> <br />
            <b>2. Abstain from flushing contaminated liquids, pills, drugs, or medications down the drain.</b> <br />
            <b>3. Desist from using the toilet as a bin.</b> <br />
            <b>4. Reduce the use of herbicides, pesticides, and fertilizers. </b> <br />
        </p>
        </TabPanel>
        <TabPanel>
        <p>
            <b>1. Keep out oils, fat, or grease from the sink.</b> <br />
            <b>2. Abstain from flushing contaminated liquids, pills, drugs, or medications down the drain.</b> <br />
            <b>3. Desist from using the toilet as a bin.</b> <br />
            <b>4. Reduce the use of herbicides, pesticides, and fertilizers. </b> <br />
        </p>
       
        </TabPanel>
  </Tabs>
         );
     }
 }  
  
export default InfoPane;


