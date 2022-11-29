import React from "react";
import { Card, Row, Col, Input, Button } from "antd";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <div>
      <Row
        justify="space-around"
        style={{ alignSelf: "center", height: "100vh" }}
        align="middle"
      >
        <Col span={8}>
          <Card className={styles.login_Card}>
            <div className={styles.top_Section}>
              <Row align="middle" justify="center">
                <Col align="middle">
                  <h1 >ASAMI APP</h1>
                </Col>
              </Row>
              <Row align="middle">
                <Col align="middle">
                  <h2 >Login</h2>
                </Col>
              </Row>
              <Row align="middle">
                <Col align="middle">
                  <h4 >
                    Using your social account
                  </h4>
                </Col>
              </Row>
            </div>
            <div className={styles.middle_section}>
              <Input
                className={styles.email_Input_Text}
                placeholder="Email or Phone"
              ></Input>
              <Button className={styles.forget_Button} type="link">
                Forget your email ?{" "}
              </Button>
              <div className={styles.guest_mode_Section}>
                <p >Not your computer? Use Guest mode to sign in privately.</p>
              </div>
            </div>
            <div >
              <Row className={styles.footer_Section}>
                <Col span={24}  justify="center" align="middle">
                  <Button className={styles.create_account_Button} type="link">
                    Create an account
                  </Button>
                  <Link to="/signup">
                  <Button size="middle" className={styles.login_Button} type="primary">
                    Next
                  </Button>
                  </Link> 
                  
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
