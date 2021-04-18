import { PanelProps, PushedProps } from '../types';
import React from 'react';
interface Props extends PanelProps, PushedProps {
    showMenu: boolean;
    isMobile: boolean;
}
declare const Panel: React.FC<Props>;
export default Panel;
