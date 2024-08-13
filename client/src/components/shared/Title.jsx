import React from 'react';
import {Helmet} from "react-helmet-async";

const Title = ({ title = "KP-Chat", description = "this is the chat app called Kp-chat" }) => {
    return (
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
    );
  }
  

export default Title