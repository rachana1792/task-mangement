import React from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { useLocation } from 'react-router-dom'


import './styles.css';
import { useNavigate } from 'react-router-dom';
import AddProject from '../AddProject';

const ToolBar= (props) => {
    const {isAdmin, length} =props
    const navigateTo = useNavigate();
    const location = useLocation();



    return(
  <Toolbar.Root className="ToolbarRoot" aria-label="Formatting options">
    <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
      <Toolbar.ToggleItem className="ToolbarToggleItem" value="bold" aria-label="Bold">
     {location.pathname==='/all'? `All Projects (${length})` : `My Projects (${length})`} 
         </Toolbar.ToggleItem>


    </Toolbar.ToggleGroup>
    <Toolbar.Separator className="ToolbarSeparator" />
    <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
    <Toolbar.Button  style={{ marginLeft: 'auto' }}  onClick={()=>location.pathname==='/myProjects'? navigateTo('/all'):  navigateTo('/myProjects')}>
    {location.pathname==='/all'? 'My Projects' : 'All Projects'}
      </Toolbar.Button>
      <Toolbar.Button  style={{ marginLeft: 'auto' }}  >
        {location.pathname==='/all' && isAdmin && <AddProject/>}
         </Toolbar.Button>
    </Toolbar.ToggleGroup>
   
    <Toolbar.Button className="ToolbarButton"  onClick={()=>navigateTo('/')} style={{ marginLeft: 'auto' }}>
      logout
    </Toolbar.Button>
  </Toolbar.Root>
)}

export default ToolBar;