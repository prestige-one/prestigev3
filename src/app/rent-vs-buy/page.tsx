"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import PageHero from "@/common/PageHero";
import { CalculatorEnquireButton } from "@/components/tools/CalculatorEnquireButton";
import { calcBuy, calcRent, rentVsBuyDefaults } from "@/lib/calculators/rentVsBuyCalculator";
import { formatAedNumber } from "@/lib/calculators/formatDisplay";
import styles from "@/app/tools/calculator-ui.module.css";

export default function RentVsBuyPage() {
  const [state, setState] = useState(rentVsBuyDefaults);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const buy = useMemo(() => calcBuy(state), [state]);
  const rent = useMemo(() => calcRent(state), [state]);
  const buyWins = buy.netCost < rent.netCost;
  const savings = Math.abs(buy.netCost - rent.netCost);

  const calculatorContext = useMemo(
    () =>
      [
        `Property Price: AED ${formatAedNumber(state.price)}`,
        `Down Payment: ${state.down}%`,
        `Mortgage Rate: ${state.rate.toFixed(1)}%`,
        `Monthly Rent: AED ${formatAedNumber(state.rent)}`,
        `Annual Appreciation: ${state.appr}%`,
        `Annual Rent Increase: ${state.rentinc}%`,
        `Investment Return: ${state.invest}%`,
        `Time Horizon: ${state.years} years`,
        `Net Cost to Buy: AED ${formatAedNumber(buy.netCost)}`,
        `Net Cost to Rent: AED ${formatAedNumber(rent.netCost)}`,
        `Potential Savings: AED ${formatAedNumber(savings)} (${buyWins ? "advantage to buy" : "advantage to rent"})`,
      ].join("\n"),
    [state, buy, rent, savings, buyWins]
  );

  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Rent vs Buy Calculator"
        description="Compare buying and renting costs over your selected time horizon."
      />
      <main className={`container py-5 ${styles.wrap}`}>
        <div className={styles.card}>
          <div className={styles.sliders}>
            <div className={styles.col}>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Property price</span>
                  <span className={styles.value}>{`${Math.round(state.price).toLocaleString("en-AE")} AED`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={300000}
                  max={10000000}
                  step={50000}
                  value={state.price}
                  onChange={(e) => setState({ ...state, price: Number(e.target.value) })}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Mortgage rate</span>
                  <span className={styles.value}>{`${state.rate.toFixed(1)}%`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={1}
                  max={12}
                  step={0.1}
                  value={state.rate}
                  onChange={(e) => setState({ ...state, rate: Number(e.target.value) })}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Monthly rent</span>
                  <span className={styles.value}>{`${Math.round(state.rent).toLocaleString("en-AE")} AED`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={2000}
                  max={50000}
                  step={500}
                  value={state.rent}
                  onChange={(e) => setState({ ...state, rent: Number(e.target.value) })}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Investment return</span>
                  <span className={styles.value}>{`${state.invest}%`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={0}
                  max={15}
                  step={0.5}
                  value={state.invest}
                  onChange={(e) => setState({ ...state, invest: Number(e.target.value) })}
                />
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Down payment</span>
                  <span className={styles.value}>{`${state.down}%`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={10}
                  max={50}
                  step={1}
                  value={state.down}
                  onChange={(e) => setState({ ...state, down: Number(e.target.value) })}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Annual appreciation</span>
                  <span className={styles.value}>{`${state.appr}%`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={0}
                  max={15}
                  step={0.5}
                  value={state.appr}
                  onChange={(e) => setState({ ...state, appr: Number(e.target.value) })}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Annual rent increase</span>
                  <span className={styles.value}>{`${state.rentinc}%`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={0}
                  max={15}
                  step={0.5}
                  value={state.rentinc}
                  onChange={(e) => setState({ ...state, rentinc: Number(e.target.value) })}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Time horizon</span>
                  <span className={styles.value}>{`${state.years} years`}</span>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={1}
                  max={20}
                  step={1}
                  value={state.years}
                  onChange={(e) => setState({ ...state, years: Number(e.target.value) })}
                />
              </div>
            </div>
          </div>

          <div className={styles.resetRow}>
            <button type="button" className={styles.resetBtn} onClick={() => setState(rentVsBuyDefaults)}>
              Reset to Default
            </button>
          </div>

          <div className={styles.resultBar}>
            <div className={styles.resultBlock}>
              <div className={styles.resultMeta}>
                <span className={styles.resultLabel}>Net cost to buy</span>
              </div>
              <div className={styles.resultCurrency}>AED</div>
              <div className={styles.resultValue}>{formatAedNumber(buy.netCost)}</div>
              <div className={styles.resultSub}>{`over ${state.years} years after equity`}</div>
            </div>
            <div className={styles.resultBlock}>
              <div className={styles.resultMeta}>
                <span className={styles.resultLabel}>Net cost to rent</span>
              </div>
              <div className={styles.resultCurrency}>AED</div>
              <div className={styles.resultValue}>{formatAedNumber(rent.netCost)}</div>
              <div className={styles.resultSub}>{`over ${state.years} years after deposit & returns`}</div>
            </div>
            <div className={styles.resultBlock}>
              <div className={styles.resultMeta}>
                <span className={styles.resultLabel}>Potential savings</span>
              </div>
              <div className={styles.resultCurrency}>AED</div>
              <div className={styles.resultValue}>{formatAedNumber(savings)}</div>
              <div className={styles.resultSub}>{buyWins ? "advantage to buy" : "advantage to rent"}</div>
            </div>
            <CalculatorEnquireButton
              calculatorName="Rent vs Buy Calculator"
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
