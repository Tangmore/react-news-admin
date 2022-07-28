import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import "./index.less";

export default function Dialog(props) {
    return (
      <div className="dialogs">
            <Modal
                {...props}
                footer={props.showFooter ? undefined : null}
            >
              {props.children}
            </Modal>
        </div>
    )
}

Dialog.propTypes={
  // 内容区域
  children:PropTypes.element.isRequired,
  // 标题
  title: PropTypes.string,
  // 弹窗是否可见
  visible: PropTypes.bool,
  // 点击蒙层是否关闭弹窗
  maskClosable: PropTypes.bool,
  // 是否展示遮罩	
  mask: PropTypes.bool,
  // 弹窗垂直居中显示
  centered: PropTypes.bool,
  // 宽度
  width: PropTypes.number,
  // 确认、取消按钮文字
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  // 确认、取消按钮回调
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  // 确定按钮 loading
  confirmLoading: PropTypes.bool,
  // 每次打开都为新内容
  destroyOnClose: PropTypes.bool,
  // 是否显示默认的footer
  showFooter: PropTypes.bool
};
Dialog.defaultProps={
  // 内容区域
  children:<></>,
  // 标题
  title: null,
  // 弹窗是否可见
  visible: false,
  // 点击蒙层是否关闭弹窗
  maskClosable: false,
  // 是否展示遮罩	
  mask: true,
  // 弹窗垂直居中显示
  centered: true,
  // 宽度
  width: 800,
  // 确认、取消按钮文字
  okText: '确认',
  cancelText: '取消',
  // 确认、取消按钮回调
  onOk: ()=>{},
  onCancel: ()=>{},
  // 确定按钮 loading
  confirmLoading: false,
  // 每次打开都为新内容
  destroyOnClose: true,
  // 是否显示默认的footer
  showFooter: true
};
