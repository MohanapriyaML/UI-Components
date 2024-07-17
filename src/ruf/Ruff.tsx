import React, { useState } from "react";
import { Link, Typography } from "@mui/material";
import EcAccordion from "../ui-components/accordion/EcAccordion";
import EcAlert from "../ui-components/alert/EcAlert";
import EcBreadcrumbs from "../ui-components/breadcrumbs/EcBreadcrumbs";
import EcButton from "../ui-components/button/EcButton";
import EcCheckbox from "../ui-components/checkbox/EcCheckbox";
import EcCollapse from "../ui-components/collapse/EcCollapse";
import EcRadioButton from "../ui-components/radio/EcRadio";

const TestComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState<string>("");
  const [alertVisible, setAlertVisible] = useState(true);

  const handleAccordionChange = (expanded: boolean) => {
    console.log("Accordion expanded:", expanded);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleCollapse = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleCloseAlert = () => {
    setAlertVisible(false);
    console.log("Alert closed");
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <div>
        <Typography variant="h5">Breadcrumbs</Typography>
        <EcBreadcrumbs separator="/" ariaLabel="breadcrumb">
          <Link href="/" color="inherit">
            Home
          </Link>
          <Link href="/about" color="inherit">
            About
          </Link>
          <Link href="/contact" color="inherit">
            Contact
          </Link>
        </EcBreadcrumbs>
      </div>
      <br />
      <div>
        <Typography variant="h5">Accordion</Typography>
        <EcAccordion
          id="accordion1"
          title="Accordion 1"
          expanded={true}
          onAccordionHandler={handleAccordionChange}
        >
          <Typography>Content for Accordion 1</Typography>
        </EcAccordion>
        <EcAccordion
          id="accordion2"
          title="Accordion 2"
          expanded={false}
          onAccordionHandler={handleAccordionChange}
        >
          <Typography>Content for Accordion 2</Typography>
        </EcAccordion>
      </div>
      <br />
      <div>
        {alertVisible && (
          <EcAlert
            title="Error Alert"
            severity="warning"
            color="error"
            variant="outlined"
            onClose={handleCloseAlert}
          >
            <Typography>Alert content goes here.</Typography>
          </EcAlert>
        )}
      </div>
      <br />
      <div>
        <Typography variant="h5">Button</Typography>
        <EcButton variant="outlined" color="success" onClick={handleClick}>
          <Typography>Click ME</Typography>
        </EcButton>
      </div>
      <br />
      <div>
        <Typography variant="h5">Checkbox</Typography>
        <EcCheckbox
          label="Sample Checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <br />
      <div>
        <Typography variant="h5">Collapse</Typography>
        <EcCollapse
          expanded={expanded}
          title="Collapse Example"
          onToggle={handleCollapse}
          secondaryAction={
            <EcButton
              onClick={handleCollapse}
              variant="outlined"
              color="success"
            >
              <Typography>Toggle Collapse</Typography>
            </EcButton>
          }
        >
          <Typography>Collapsed content goes here.</Typography>
        </EcCollapse>
      </div>
      <br />
      <div>
        <Typography variant="h5">Radio Button</Typography>
        <EcRadioButton
          name="radio-buttons-group"
          value="option1"
          isSelectedValue={selectedRadio}
          setSelectedValue={setSelectedRadio}
        />
        <EcRadioButton
          name="radio-buttons-group"
          value="option2"
          isSelectedValue={selectedRadio}
          setSelectedValue={setSelectedRadio}
        />
      </div>
    </div>
  );
};

export default TestComponent;
