import React from "react";
import { Card, Row, Col, Input, Button } from "antd";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div>
      <Row
        justify='space-around'
        style={{ alignSelf: "center", height: "100vh" }}
        align='middle'
      >
        <Col span={12}>
          <Card className={styles.signUpCard}>
            <Col span={12}>

              <div className={styles.middleSection}>
                <div className={styles.fullNameSection}>
                  <Input placeholder='First Name'></Input>
                  <Input placeholder='Last Name'></Input>
                </div>
                <div className={styles.userNameSection}>
                  <Input placeholder='username'></Input>
                  <label htmlFor=''>
                    You can use letters numbers and emails
                  </label>
                </div>
                <div className={styles.passwordSection}>
                  <Input placeholder='Password'></Input>
                  <Input placeholder='Repeat Password'></Input>
                </div>
              </div>

              <div className={styles.footerSection}>
                <Button type='primary'>Sign Up</Button>
              </div>
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
