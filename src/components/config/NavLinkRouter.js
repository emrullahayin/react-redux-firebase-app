import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";

export const NavLinkRouter = forwardRef((props, ref) => (
  <NavLink innerRef={ref} {...props} />
));
