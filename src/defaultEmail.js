export const DEFAULT_MJML = `
<mjml>
  <mj-head>
    <mj-title>NICECNC Members' Day</mj-title>
    <mj-preview>Buy 2 parts and save 14%, or buy 3 and save 17%.</mj-preview>
    <mj-attributes>
      <mj-all font-family="Arial, Helvetica, sans-serif" />
      <mj-text color="#171717" font-size="16px" line-height="1.55" />
      <mj-button background-color="#ef3f24" color="#ffffff" font-size="16px" font-weight="700" border-radius="4px" inner-padding="15px 28px" />
      <mj-section padding="0" />
    </mj-attributes>
    <mj-style inline="inline">
      .coupon div { letter-spacing: 1px; }
      .muted div { color: #686868 !important; }
    </mj-style>
  </mj-head>
  <mj-body background-color="#ecebea" width="640px">
    <mj-section background-color="#111111" padding="18px 28px">
      <mj-column width="45%">
        <mj-text color="#ffffff" font-size="26px" font-weight="900" padding="0">NICECNC</mj-text>
      </mj-column>
      <mj-column width="55%">
        <mj-text align="right" color="#d5d5d5" font-size="12px" padding="0">MOTORCYCLE · ATV · UTV PARTS</mj-text>
      </mj-column>
    </mj-section>

    <mj-hero mode="fixed-height" height="360px" background-width="640px" background-height="360px"
      background-url="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1280&q=85"
      background-color="#111111" padding="0">
      <mj-text align="center" color="#ffffff" font-size="14px" font-weight="700" letter-spacing="2px">MEMBERS' DAY</mj-text>
      <mj-text align="center" color="#ffffff" font-size="44px" font-weight="900" line-height="1.05">SAVE MORE.<br/>RIDE MORE.</mj-text>
      <mj-text align="center" color="#ffffff" font-size="17px">Limited-time savings on upgrades made for your machine.</mj-text>
      <mj-button href="https://ca.nicecnc.com/pages/2026-members-day-sales-motocycle-avt-utv-parts-canada?utm_source=email&utm_medium=edm&utm_campaign=members_day_2026">SHOP THE SALE</mj-button>
    </mj-hero>

    <mj-section background-color="#ffffff" padding="38px 28px 18px">
      <mj-column>
        <mj-text align="center" font-size="13px" color="#ef3f24" font-weight="800" letter-spacing="2px">BUY MORE · SAVE MORE</mj-text>
        <mj-text align="center" font-size="30px" font-weight="900" padding-top="4px">Choose your offer</mj-text>
        <mj-text align="center" css-class="muted" padding-top="0">Add eligible parts to your cart and apply the matching code at checkout.</mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding="12px 20px 36px">
      <mj-column background-color="#f5f4f2" border="1px solid #dedbd7" border-radius="6px" padding="24px 15px">
        <mj-text align="center" font-size="13px" font-weight="800" padding="0">BUY 2 PARTS</mj-text>
        <mj-text align="center" color="#ef3f24" font-size="34px" font-weight="900" padding="8px 0">14% OFF</mj-text>
        <mj-text align="center" css-class="coupon" font-size="15px" font-weight="800" padding="10px" border="1px dashed #aaa">CODE: MEMB14</mj-text>
      </mj-column>
      <mj-column background-color="#111111" border-radius="6px" padding="24px 15px">
        <mj-text align="center" color="#ffffff" font-size="13px" font-weight="800" padding="0">BUY 3 PARTS</mj-text>
        <mj-text align="center" color="#ffcf2f" font-size="34px" font-weight="900" padding="8px 0">17% OFF</mj-text>
        <mj-text align="center" color="#ffffff" css-class="coupon" font-size="15px" font-weight="800" padding="10px" border="1px dashed #777">CODE: MEMB17</mj-text>
        <mj-text align="center" color="#cfcfcf" font-size="12px" padding-bottom="0">PLUS A FREE GIFT</mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#f7f6f4" padding="36px 28px 16px">
      <mj-column>
        <mj-text align="center" font-size="13px" color="#ef3f24" font-weight="800" letter-spacing="2px">POPULAR UPGRADES</mj-text>
        <mj-text align="center" font-size="28px" font-weight="900" padding-top="4px">Built for the ride ahead</mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#f7f6f4" padding="8px 20px">
      <mj-column background-color="#ffffff" border-radius="6px" padding-bottom="18px">
        <mj-image src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=720&q=80" alt="Motorcycle upgrade" padding="0" border-radius="6px 6px 0 0" />
        <mj-text font-size="17px" font-weight="800" padding-bottom="4px">Precision Motorcycle Upgrades</mj-text>
        <mj-text css-class="muted" font-size="13px" padding-top="0">Controls, protection and performance parts.</mj-text>
        <mj-button href="https://ca.nicecnc.com/collections/motorcycle-parts" align="left" padding-top="4px">SHOP MOTORCYCLE</mj-button>
      </mj-column>
      <mj-column background-color="#ffffff" border-radius="6px" padding-bottom="18px">
        <mj-image src="https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?auto=format&fit=crop&w=720&q=80" alt="ATV and UTV parts" padding="0" border-radius="6px 6px 0 0" />
        <mj-text font-size="17px" font-weight="800" padding-bottom="4px">ATV &amp; UTV Essentials</mj-text>
        <mj-text css-class="muted" font-size="13px" padding-top="0">Trail-ready protection, storage and controls.</mj-text>
        <mj-button href="https://ca.nicecnc.com/collections/atv-utv-parts" align="left" padding-top="4px">SHOP ATV / UTV</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#f7f6f4" padding="32px 28px 40px">
      <mj-column>
        <mj-text align="center" font-size="26px" font-weight="900">Your next upgrade starts here.</mj-text>
        <mj-text align="center" css-class="muted" padding-top="0">Build your cart, choose your code and save on parts made for your ride.</mj-text>
        <mj-button href="https://ca.nicecnc.com/pages/2026-members-day-sales-motocycle-avt-utv-parts-canada?utm_source=email&utm_medium=edm&utm_campaign=members_day_2026&utm_content=final_cta">VIEW ALL MEMBERS' DAY DEALS</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#111111" padding="28px">
      <mj-column>
        <mj-text align="center" color="#ffffff" font-size="13px">Free Canada Shipping · Secure Checkout · Easy Support</mj-text>
        <mj-divider border-color="#343434" />
        <mj-text align="center" color="#999999" font-size="11px">NICECNC Canada<br/>You received this email because you subscribed to NICECNC updates.</mj-text>
        <mj-text align="center" color="#bdbdbd" font-size="11px"><a href="[[unsubscribe_link]]" style="color:#bdbdbd">Unsubscribe</a></mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`;

export const BLOCKS = [
  {
    id: "nicecnc-heading",
    label: "标题",
    category: "NICECNC",
    content: '<mj-section background-color="#ffffff" padding="28px"><mj-column><mj-text align="center" font-size="30px" font-weight="900">SECTION TITLE</mj-text><mj-text align="center" color="#686868">Add a short supporting message here.</mj-text></mj-column></mj-section>'
  },
  {
    id: "nicecnc-cta",
    label: "行动按钮",
    category: "NICECNC",
    content: '<mj-section background-color="#ffffff" padding="28px"><mj-column><mj-button background-color="#ef3f24" color="#ffffff" font-weight="700" href="https://ca.nicecnc.com">SHOP NOW</mj-button></mj-column></mj-section>'
  },
  {
    id: "nicecnc-coupon",
    label: "优惠码",
    category: "NICECNC",
    content: '<mj-section background-color="#ffffff" padding="20px"><mj-column background-color="#111111" border-radius="6px" padding="24px"><mj-text align="center" color="#ffcf2f" font-size="34px" font-weight="900">17% OFF</mj-text><mj-text align="center" color="#ffffff" border="1px dashed #777" padding="10px">CODE: MEMB17</mj-text></mj-column></mj-section>'
  },
  {
    id: "nicecnc-product",
    label: "商品卡",
    category: "NICECNC",
    content: '<mj-section background-color="#f7f6f4" padding="16px"><mj-column background-color="#ffffff"><mj-image src="https://placehold.co/560x360/f2f2f2/555?text=Product+Image" alt="Product"/><mj-text font-size="17px" font-weight="800">Product name</mj-text><mj-text color="#ef3f24" font-size="20px" font-weight="900">$99.99 CAD</mj-text><mj-button href="https://ca.nicecnc.com">SHOP NOW</mj-button></mj-column></mj-section>'
  },
  {
    id: "nicecnc-image-banner",
    label: "横幅图片",
    category: "NICECNC",
    content: '<mj-section padding="0"><mj-column><mj-image src="https://placehold.co/1280x520/111/fff?text=NICECNC+Banner" alt="NICECNC banner" padding="0"/></mj-column></mj-section>'
  },
  {
    id: "nicecnc-divider",
    label: "分隔线",
    category: "NICECNC",
    content: '<mj-section background-color="#ffffff" padding="8px 28px"><mj-column><mj-divider border-color="#dedbd7" /></mj-column></mj-section>'
  }
];
