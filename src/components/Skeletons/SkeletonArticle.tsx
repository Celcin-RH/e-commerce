import React from 'react'
import SkeletonElement from './SkeletonElement'

interface SkeletonArticleProps {
    theme: string;
}

const SkeletonArticle : React.FC<SkeletonArticleProps> = (props) => {
    const {theme} = props;
    const themeClass = theme || 'light';
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
        <div className='skeleton-article'>
            <SkeletonElement type="photo" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
        </div>
    </div>
  )

}

export default SkeletonArticle;