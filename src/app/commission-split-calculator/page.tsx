"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import PageHero from "@/common/PageHero";
import { CalculatorEnquireButton } from "@/components/tools/CalculatorEnquireButton";
import { calcCommission, commissionDefaults } from "@/lib/calculators/commissionSplitCalculator";
import { formatAedNumber } from "@/lib/calculators/formatDisplay";
import styles from "@/app/tools/calculator-ui.module.css";

type DealType = "secondary" | "primary" | "rental";

export default function CommissionSplitCalculatorPage() {
  const [type, setType] = useState<DealType>("secondary");
  const [state, setState] = useState(commissionDefaults.secondary);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const result = useMemo(() => calcCommission(state), [state]);

  const setDealType = (nextType: DealType) => {
    setType(nextType);
    setState(commissionDefaults[nextType]);
  };

  const calculatorContext = useMemo(
    () =>
      [
        `Deal Type: ${type}`,
        `Deal Value: AED ${formatAedNumber(state.deal)}`,
        `Commission Rate: ${state.comm.toFixed(1)}%`,
        `Agent Split: ${state.agentSplit}%`,
        `Referral: ${state.ref}% (${state.referral ? "included" : "excluded"})`,
        `VAT: ${state.vat ? "applied (5%)" : "not applied"}`,
        `Agent Share: AED ${formatAedNumber(result.agentAmt)}`,
        `Agency Share: AED ${formatAedNumber(result.agencyAmt)}`,
        `Client Pays: AED ${formatAedNumber(result.clientPays)}`,
      ].join("\n"),
    [type, state, result]
  );

  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Commission Split Calculator"
        description="See how commission is distributed between agent, agency, referral, and VAT."
      />
      <main className={`container py-5 ${styles.wrap}`}>
        <div className={styles.card}>
          <div className={styles.tabRow} role="tablist" aria-label="Deal type">
            <button
              type="button"
              role="tab"
              aria-selected={type === "secondary"}
              className={`${styles.tab} ${type === "secondary" ? styles.tabActive : ""}`}
              onClick={() => setDealType("secondary")}
            >
              Secondary
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={type === "primary"}
              className={`${styles.tab} ${type === "primary" ? styles.tabActive : ""}`}
              onClick={() => setDealType("primary")}
            >
              Primary
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={type === "rental"}
              className={`${styles.tab} ${type === "rental" ? styles.tabActive : ""}`}
              onClick={() => setDealType("rental")}
            >
              Rental
            </button>
          </div>

          <div className={styles.sliders}>
            <div className={styles.col}>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Deal value</span>
                  <span className={styles.value}>{`${Math.round(state.deal).toLocaleString("en-AE")} AED`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={100000}
                  max={20000000}
                  step={50000}
                  value={state.deal}
                  onChange={(e) => setState({ ...state, deal: Number(e.target.value) })}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Agent split</span>
                  <span className={styles.value}>{`${state.agentSplit}%`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={10}
                  max={90}
                  step={5}
                  value={state.agentSplit}
                  onChange={(e) => setState({ ...state, agentSplit: Number(e.target.value) })}
                />
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Commission</span>
                  <span className={styles.value}>{`${state.comm.toFixed(1)}%`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={0.5}
                  max={10}
                  step={0.5}
                  value={state.comm}
                  onChange={(e) => setState({ ...state, comm: Number(e.target.value) })}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Referral</span>
                  <span className={styles.value}>{`${state.ref}%`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={state.ref}
                  onChange={(e) => setState({ ...state, ref: Number(e.target.value) })}
                />
              </div>
            </div>
          </div>

          <div className={styles.optionsRow}>
            <label className={styles.optionLabel}>
              <input type="checkbox" checked={state.referral} onChange={(e) => setState({ ...state, referral: e.target.checked })} />
              Include referral fee
            </label>
            <label className={styles.optionLabel}>
              <input type="checkbox" checked={state.vat} onChange={(e) => setState({ ...state, vat: e.target.checked })} />
              Apply VAT (5%)
            </label>
          </div>

          <div className={styles.resetRow}>
            <button type="button" className={styles.resetBtn} onClick={() => setState(commissionDefaults[type])}>
              Reset to Default
            </button>
          </div>

          <div className={styles.resultBar}>
            <div className={styles.resultBlock}>
              <div className={styles.resultMeta}>
                <span className={styles.resultLabel}>Agent share</span>
              </div>
              <div className={styles.resultCurrency}>AED</div>
              <div className={styles.resultValue}>{formatAedNumber(result.agentAmt)}</div>
              <div className={styles.resultSub}>{`${state.agentSplit}% of net after referral`}</div>
            </div>
            <div className={styles.resultBlock}>
              <div className={styles.resultMeta}>
                <span className={styles.resultLabel}>Agency share</span>
              </div>
              <div className={styles.resultCurrency}>AED</div>
              <div className={styles.resultValue}>{formatAedNumber(result.agencyAmt)}</div>
              <div className={styles.resultSub}>remaining net commission</div>
            </div>
            <div className={styles.resultBlock}>
              <div className={styles.resultMeta}>
                <span className={styles.resultLabel}>Client pays</span>
              </div>
              <div className={styles.resultCurrency}>AED</div>
              <div className={styles.resultValue}>{formatAedNumber(result.clientPays)}</div>
              <div className={styles.resultSub}>{state.vat ? "gross + VAT" : "gross commission"}</div>
            </div>
            <CalculatorEnquireButton
              calculatorName="Commission Split Calculator"
              calculatorContext={calculatorContext}
              className={styles.enquireBtn}
              isOpen={isEnquireOpen}
              onOpen={() => setIsEnquireOpen(true)}
              onClose={() => setIsEnquireOpen(false)}
            />
          </div>
        </div>
      </main>
      <SiteFooterBlock />
    </>
  );
}
