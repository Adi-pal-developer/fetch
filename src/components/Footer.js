
import { NavLink } from 'react-router-dom'
function Footer() {
  return <>
    <footer>
      {/* <div class="firstpanel">
        Back to top
      </div> */}
      <div class="secondpanel" style={{ textDecoration: 'none' }} >
        <ul>
          <p>Get to Know Us</p>
          <NavLink to style={{ textDecoration: 'none' }}>Careers</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Blog</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>About Amazon</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Investor Relations</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Amazon Devices</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Amazon Science</NavLink >
        </ul>
        <ul>
          <p>Make Money with Us</p>
          <NavLink to style={{ textDecoration: 'none' }}>Sell products on Amazon</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Sell on Amazon Business</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Sell apps on Amazon</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Become an Affiliate</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Self-Publish with Us</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Host an Amazon Hub</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>See More Make Money with Us</NavLink >
        </ul>
        <ul>
          <p>Amazon Payment Products</p>
          <NavLink to style={{ textDecoration: 'none' }}>Amazon Business Card</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Shop with Points</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Reload Your Balance</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Amazon Currency Converter</NavLink >
        </ul>
        <ul>
          <p>Let Us Help You</p>
          <NavLink to style={{ textDecoration: 'none' }}>Amazon and COVID-19</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Your Account</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Your Orders</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Shipping Rates & Policies</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Returns & Replacements</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Manage Your Content and Devices</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Amazon Assistant</NavLink >
          <NavLink to style={{ textDecoration: 'none' }}>Help</NavLink >
        </ul>
      </div>
      <div class="thirdpanel">
        <div class="logo"></div>
        <div class="select-op">
          <select name="" id="" class="sele">
            <option value="En">English</option>
          </select>
          <select name="" id="" class="sele">
            <option value="1">$ USD - U.S. Dollar</option>
          </select>

          <select name="" id="" class="sele">
            <option value="4"> United states</option>
          </select>
        </div>
      </div>
      <div class="panel4">
        <div class="page">
          <NavLink to="">Conditions of Use</NavLink >
          <NavLink to="">Privacy Notice</NavLink >
          <NavLink to="">Your Ads Privacy Choices</NavLink >
        </div>
        <div class="copyright">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>

  </>
} export default Footer;