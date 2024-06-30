import React from "react";
import './log_in.css';

export default function LogIn () {
  return (
    <div className="default-login">
      <div className="div">
        <div className="frame">
          <div className="overlap-group">
            <div className="rectangle" />
            <img
              className="image-removebg"
              alt="Imageremovebg"
              src="https://c.animaapp.com/oB3EtN7C/img/image-1--5--removebg-preview-2@2x.png"
            />
          </div>
        </div>
        <div className="frame-2">
          <div className="frame-3">
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper">Welcome Back, Jonathan</div>
                <img
                  className="emoji-waving-hand"
                  alt="Emoji waving hand"
                  src="https://c.animaapp.com/oB3EtN7C/img/---emoji--waving-hand-@2x.png"
                />
              </div>
              <p className="p">Continue with Google or Enter Login Details</p>
            </div>
            <div className="frame-6">
              <div className="frame-7">
                <div className="frame-8">
                  <img
                    className="img"
                    alt="Logos google icon"
                    src="https://c.animaapp.com/oB3EtN7C/img/logos-google-icon.svg"
                  />
                  <div className="text-wrapper-2">Continue with Google</div>
                </div>
                <div className="group">
                  <div className="rectangle-2" />
                  <div className="rectangle-3" />
                  <div className="text-wrapper-3">or</div>
                </div>
              </div>
              <div className="frame-9">
                <div className="frame-10">
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">Email Address</div>
                  </div>
                  <div className="frame-11">
                    <div className="text-wrapper-4">Password</div>
                    <img
                      className="img"
                      alt="Ic baseline remove"
                      src="https://c.animaapp.com/oB3EtN7C/img/ic-baseline-remove-red-eye.svg"
                    />
                  </div>
                </div>
                <div className="frame-12">
                  <div className="frame-13">
                    <div className="rectangle-4" />
                    <div className="text-wrapper-4">Remember me</div>
                  </div>
                  <div className="text-wrapper-5">Forget Password</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-14">
            <div className="frame-15">
              <div className="text-wrapper-6">Log In</div>
            </div>
            <div className="frame-16">
              <p className="text-wrapper-7">Don’t have an account yet?</p>
              <div className="text-wrapper-8">Create account</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
