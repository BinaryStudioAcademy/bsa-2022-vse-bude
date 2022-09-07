/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Handle } from "./handle/component";
import { StyledRange } from "./styled-range/component";

export const Range = React.forwardRef((ref, props) =>  {
    const router = useRouter();
    const [value, setValue] = useState(0);

    useEffect(() => {
        const handleStart = () => {
          setValue(0);
        };
        const handleComplete = () => {
          setValue(100);
          setTimeout(() => {
            setValue(0);
          }, 100);          
        };
    
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
    
        return () => {
          router.events.off('routeChangeStart', handleStart);
          router.events.off('routeChangeComplete', handleComplete);
          router.events.off('routeChangeError', handleComplete);
        };
      }, [router]);
    
    return(
    <StyledRange
        ref={ref}
        allowCross={false}
        value={value}
        // handle={<Handle />} 
        />
)});
