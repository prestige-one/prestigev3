"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import PageHero from "@/common/PageHero";
import { CalculatorEnquireButton } from "@/components/tools/CalculatorEnquireButton";
import { calcLeadRoi, leadRoiDefaults } from "@/lib/calculators/leadRoiCalculator";
import { formatAedNumber } from "@/lib/calculators/formatDisplay";
import styles from "@/app/tools/calculator-ui.module.css";

type RoiType = "broker" | "developer";

export default function LeadRoiCalculatorPage() {
  const [type, setType] = useState<RoiType>("broker");
  const [state, setState] = useState(leadRoiDefaults.broker);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const result = useMemo(() => calcLeadRoi(state), [state]);

  const switchType = (nextType: RoiType) => {
    setType(nextType);
    setState(leadRoiDefaults[nextType]);
  };

  const calculatorContext = useMemo(
    () =>
      [
        `Scenario: ${type}`,
        `Marketing Spend: AED ${formatAedNumber(state.spend)}`,
        `Leads: ${state.leads}`,
        `Conversion Rate: ${state.conv}%`,
        `Commission Rate: ${state.comm.toFixed(1)}%`,
        `Average Property Price: AED ${formatAedNumber(state.price)}`,
        `Gross Commission: AED ${formatAedNumber(result.revenue)}`,
        `Net Profit: AED ${formatAedNumber(result.profit)}`,
        `ROI: ${Math.round(result.roi)}%`,
        `Deals Closed: ${result.deals % 1 === 0 ? result.deals : result.deals.toFixed(1)}`,
        `Cost Per Lead: AED ${formatAedNumber(result.cpl)}`,
        `Cost Per Deal: AED ${formatAedNumber(result.cpd)}`,
      ].join("\n"),
    [type, state, result]
  );

  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Lead ROI Calculator"
        description="Measure revenue, profit, and ROI from your lead generation spend."
      />
      <main className={`container py-5 ${styles.wrap}`}>
        <div className={styles.card}>
          <div className={styles.tabRow} role="tablist" aria-label="Scenario">
            <button
              type="button"
              role="tab"
              aria-selected={type === "broker"}
              className={`${styles.tab} ${type === "broker" ? styles.tabActive : ""}`}
              onClick={() => switchType("broker")}
            >
              Broker
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={type === "developer"}
              className={`${styles.tab} ${type === "developer" ? styles.tabActive : ""}`}
              onClick={() => switchType("developer")}
            >
              Developer
            </button>
          </div>

          <div className={styles.sliders}>
            <div className={styles.col}>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Marketing spend</span>
                  <span className={styles.value}>{`${Math.round(state.spend).toLocaleString("en-AE")} AED`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={5000}
                  max={500000}
                  step={5000}
                  value={state.spend}
                  onChange={(e) => setState({ ...state, spend: Number(e.target.value) })}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Conversion</span>
                  <span className={styles.value}>{`${state.conv}%`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={1}
                  max={30}
                  step={0.5}
                  value={state.conv}
                  onChange={(e) => setState({ ...state, conv: Number(e.target.value) })}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Commission</span>
                  <span className={styles.value}>{`${state.comm.toFixed(1)}%`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={0.5}
                  max={5}
                  step={0.5}
                  value={state.comm}
                  onChange={(e) => setState({ ...state, comm: Number(e.target.value) })}
                />
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Leads</span>
                  <span className={styles.value}>{String(state.leads)}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={10}
                  max={1000}
                  step={10}
                  value={state.leads}
                  onChange={(e) => setState({ ...state, leads: Number(e.target.value) })}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Avg property price</span>
                  <span className={styles.value}>{`${Math.round(state.price).toLocaleString("en-AE")} AED`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={300000}
                  max={20000000}
                  step={100000}
                  value={state.price}
                  onChange={(e) => setState({ ...state, price: Number(e.target.value) })}
                />
              </div>
            </div>
          </div>

          <div className={styles.optionsRow}>
            <button type="button" className={styles.textLinkBtn} onClick={() => setShowBreakdown((v) => !v)}>
              {showBreakdown ? "Hide breakdown" : "View breakdown"}
            </button>
            {showBreakdown ? (
              <div className={styles.breakdownDetail}>
                <span>
                  Deals closed: {result.deals % 1 === 0 ? result.deals : result.deals.toFixed(1)}
                </span>
                <span>Cost per lead: AED {formatAedNumber(result.cpl)}</span>
                <span>Cost per deal: AED {formatAedNumber(result.cpd)}</span>
              </div>
            ) : null}
          </div>

          <div className={styles.resetRow}>
            <button type="button" className={styles.resetBtn} onClick={() => setState(leadRoiDefaults[type])}>
              Reset to Default
            </button>
          </div>

          <div className={styles.resultBar}>
            <div className={styles.resultBlock}>
              <div className={styles.resultMeta}>
                <span className={styles.resultLabel}>Gross commission</span>
              </div>
              <div className={styles.resultCurrency}>AED</div>
              <div className={styles.resultValue}>{formatAedNumber(result.revenue)}</div>
              <div className={styles.resultSub}>from converted deals</div>
            </div>
            <div className={styles.resultBlock}>
              <div className={styles.resultMeta}>
                <span className={styles.resultLabel}>Net profit</span>
              </div>
              <div className={styles.resultCurrency}>AED</div>
              <div className={styles.resultValue}>{formatAedNumber(result.profit)}</div>
              <div className={styles.resultSub}>after marketing spend</div>
            </div>
            <div className={styles.resultBlock}>
              <div className={styles.resultMeta}>
                <span className={styles.resultLabel}>ROI</span>
              </div>
              <div className={styles.resultCurrency}>%</div>
              <div className={styles.resultValue}>{`${Math.round(result.roi)}%`}</div>
              <div className={styles.resultSub}>on marketing spend</div>
            </div>
            <CalculatorEnquireButton
              calculatorName="Lead ROI Calculator"
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
