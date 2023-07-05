import { Modal as Modalantd } from 'antd';
import { useState } from 'react';

const CsModal = ({
    open,
    title,
    handleOk,
    handleCancel,
    okButtonProps,
    cancelButtonProps,
    okText,
    cancelText,
    footer,
    children,
    width,
    height = '80vh',
}) => (
    <Modalantd
        cancelText={cancelText}
        okText={okText}
        width={width}
        style={{ height }}
        title={title}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={okButtonProps}
        cancelButtonProps={cancelButtonProps}
        footer={footer}
    >
        {children}
    </Modalantd>
);

export default CsModal;
