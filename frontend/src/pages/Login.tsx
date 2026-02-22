import { type FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { useAuthStore } from "@/stores/auth";

import styles from "./Login.module.css";

export function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login, register, loading, error } = useAuthStore();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (mode === "login") {
      await login(email, password);
    } else {
      await register(email, password, inviteCode);
    }

    // Check if login succeeded (token is set)
    if (useAuthStore.getState().token) {
      navigate("/investigations");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {mode === "login" ? t("auth.login") : t("auth.register")}
        </h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          {error && (
            <div className={styles.error}>{t(error)}</div>
          )}

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              {t("auth.email")}
            </label>
            <input
              id="email"
              className={styles.input}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              {t("auth.password")}
            </label>
            <input
              id="password"
              className={styles.input}
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
          </div>

          {mode === "register" && (
            <div className={styles.field}>
              <label className={styles.label} htmlFor="inviteCode">
                {t("auth.inviteCode")}
              </label>
              <input
                id="inviteCode"
                className={styles.input}
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                autoComplete="off"
              />
            </div>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading
              ? t("common.loading")
              : mode === "login"
                ? t("auth.login")
                : t("auth.register")}
          </button>
        </form>

        <button
          className={styles.switchBtn}
          onClick={() => setMode(mode === "login" ? "register" : "login")}
          type="button"
        >
          {mode === "login"
            ? t("auth.switchToRegister")
            : t("auth.switchToLogin")}
        </button>
      </div>
    </div>
  );
}
