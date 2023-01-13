import React from 'react';
import {Upload} from 'antd'

export default function HomePage() {
  return <div><Upload
  action="/auth/global/conversion/upload/answersheet/convert.htm"
  // accept=".doc,.docx"
  // beforeUpload={handleBeforeUpload}
  // itemRender={() => null}
  // customRequest={handlePaperUpload}
  // maxCount={1}
  // onChange={handleUploadChange}
  // onRemove={() => {
  //   setShowBtns(true)
  //   return true
  // }}
>
  { (
    <span
      className="paper-analysis--btn paper-analysis--upload"
      // onClick={handlePaperUpload}
    >
      <i className="iconfont icon-global-upload1" />
      上传试卷
    </span>
  )}
</Upload></div>;
}
