import React, { useState, useEffect } from 'react';
import { Divider, Tooltip, List, Avatar, Spin, Tabs, Input, Button } from 'antd';



function WalletView({ wallet, setWallet, seedPhrase, setSeedPhrase, selectedChain }) {
  return (
  <>
    <div>
        {wallet}
    </div>
  </>
  );
}

export default WalletView;
