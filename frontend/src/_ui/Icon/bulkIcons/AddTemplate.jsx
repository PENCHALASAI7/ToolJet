import React from 'react';

const AddTemplate = ({
  fill = '#AEBDEE',
  width = '30',
  className = '',
  viewBox = '0 0 30 30',
  secondaryFill = '#3E63DD',
}) => (
  <svg
    width={width}
    className={className}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.65384 0.5H1.92307C0.860991 0.5 0 1.36099 0 2.42307V9.15384C0 10.2159 0.860991 11.0769 1.92307 11.0769H8.65384C9.71593 11.0769 10.5769 10.2159 10.5769 9.15384V2.42307C10.5769 1.36099 9.71593 0.5 8.65384 0.5ZM23.077 0.5H16.3461C15.284 0.5 14.423 1.36099 14.423 2.42307V9.15384C14.423 10.2159 15.284 11.0769 16.3461 11.0769H23.077C24.1389 11.0769 25 10.2159 25 9.15384V2.42307C25 1.36099 24.1389 0.5 23.077 0.5ZM1.92307 14.923H8.65384C9.71593 14.923 10.5769 15.784 10.5769 16.8461V23.577C10.5769 24.6389 9.71593 25.5 8.65384 25.5H1.92307C0.860991 25.5 0 24.6389 0 23.577V16.8461C0 15.784 0.860991 14.923 1.92307 14.923Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.5552 17.282C23.5552 16.5424 22.9556 15.9427 22.2159 15.9427C21.4763 15.9427 20.8767 16.5424 20.8767 17.282V20.3762H17.7826C17.043 20.3762 16.4434 20.9759 16.4434 21.7155C16.4434 22.4551 17.043 23.0548 17.7826 23.0548H20.8767V26.1489C20.8767 26.8885 21.4763 27.4882 22.2159 27.4882C22.9556 27.4882 23.5552 26.8885 23.5552 26.1489V23.0548H26.6495C27.3892 23.0548 27.9888 22.4551 27.9888 21.7155C27.9888 20.9759 27.3892 20.3762 26.6495 20.3762H23.5552V17.282Z"
      fill={secondaryFill}
    />
  </svg>
);

export default AddTemplate;
