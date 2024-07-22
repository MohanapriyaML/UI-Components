"use client"
import React, { useState } from "react";
import { Link, Typography } from "@mui/material";
import UiAccordion from "../ui-components/accordion/UiAccordion";
import UiAlert from "../ui-components/alert/UiAlert";
import UiBreadcrumbs from "../ui-components/breadcrumbs/UiBreadcrumbs";
import UiCheckbox from "../ui-components/checkbox/UiCheckbox";
import UiCollapse from "../ui-components/collapse/UiCollapse";
import UiRadioButton from "../ui-components/radio/UiRadio";
import UiButton from "../ui-components/button/UiButton";


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
    alert("clicked")
  };

  return (
    <div>
      <div>
        <Typography variant="h5">Breadcrumbs</Typography>
        <UiBreadcrumbs separator="/" ariaLabel="breadcrumb">
          <Link href="/" color="inherit">
            Home
          </Link>
          <Link href="/about" color="inherit">
            About
          </Link>
          <Link href="/contact" color="inherit">
            Contact
          </Link>
        </UiBreadcrumbs>
      </div>
      <br />
      <div>
        <Typography variant="h5">Accordion</Typography>
        <UiAccordion
          id="accordion1"
          title="Accordion 1"
          expanded={true}
          onAccordionHandler={handleAccordionChange}
        >
          <Typography>Content for Accordion 1</Typography>
        </UiAccordion>
        <UiAccordion
          id="accordion2"
          title="Accordion 2"
          expanded={false}
          onAccordionHandler={handleAccordionChange}
        >
          <Typography>Content for Accordion 2</Typography>
        </UiAccordion>
      </div>
      <br />
      <div>
        {alertVisible && (
          <UiAlert
            title="Error Alert"
            severity="warning"
            color="error"
            variant="outlined"
            onClose={handleCloseAlert}
          >
            <Typography>Alert content goes here.</Typography>
          </UiAlert>
        )}
      </div>
      <br />
      <div>
        <Typography variant="h5">Button</Typography>
        <UiButton variant="outlined" color="success" onClick={handleClick}>
          <Typography>Click ME</Typography>
        </UiButton>
      </div>
      <br />
      <div>
        <Typography variant="h5">Checkbox</Typography>
        <UiCheckbox
          label="Sample Checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <br />
      <div>
        <Typography variant="h5">Collapse</Typography>
        <UiCollapse
          expanded={expanded}
          title="Collapse Example"
          onToggle={handleCollapse}
          secondaryAction={
            <UiButton
              onClick={handleCollapse}
              variant="outlined"
              color="success"
            >
              <Typography>Toggle Collapse</Typography>
            </UiButton>
          }
        >
          <Typography>Collapsed content goes here.</Typography>
        </UiCollapse>
      </div>
      <br />
      <div>
        <Typography variant="h5">Radio Button</Typography>
        <UiRadioButton
          name="radio-buttons-group"
          value="option1"
          isSelectedValue={selectedRadio}
          setSelectedValue={setSelectedRadio}
        />
        <UiRadioButton
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
