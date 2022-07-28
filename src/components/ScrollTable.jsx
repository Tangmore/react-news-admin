import React, { useEffect, useState, useRef } from 'react';
import { getTableScroll } from '@plugins/utils'
import { Table, } from 'antd';

export default function (props) {
    const [scrollY, setScrollY] = useState()
    let countRef = useRef(null);
    useEffect(() => {
        let scrolly = getTableScroll({ ref: countRef })
        setScrollY(scrolly)
        window.addEventListener('resize',setScrollY(scrolly));
        return ()=>{
            window.removeEventListener('resize',setScrollY(scrolly));
        }
    }, [props])
    return <div ref={countRef} >
    	 {/* 保留Table的其他属性以及scroll.x */}
        <Table {...props} scroll={{ y: scrollY }} />
    </div >
}