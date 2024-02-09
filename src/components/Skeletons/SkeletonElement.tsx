import React from 'react';
import './SkeletonElement.css';

interface SkeletonElementProps {
  type: string;
}

const SkeletonElement: React.FC<SkeletonElementProps> = (props) => {
  const { type } = props;
  const classes = `skeleton ${type}`;
  
  return (
    <div className={classes}></div>
  );
};

export default SkeletonElement;
