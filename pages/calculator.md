---
layout: default
title: "Cost Calculator"
permalink: /calculator.html
description:
  How much does a normal project cost with Teamed.io? This
  calculator will give you a ballpark estimate
keywords:
  - cost of software
  - how much software costs
  - calculate cost of software
  - rough order of magnitude
  - estimate software cost
---

Our [project lifecycle](http://www.yegor256.com/2014/10/06/software-project-lifecycle.html)
consists of four phases. First three of them
can be estimated:

<form name="estimate">
  <table class="tbl">
    <colgroup>
      <col style="width: 7em;"/>
      <col/>
    </colgroup>
    <tbody>
      <tr>
        <td>Thinking</td>
        <td><input style="width:5em" ng-model="thinking"
          maxlength="3" ng-maxlength="3" type="number"
          ng-change="update()" autofocus="autofocus" tabindex="1" name="thinking"/>
          hours
          <span class="oops" ng-show="estimate.thinking.$error.pattern">oops!</span></td>
      </tr>
      <tr>
        <td>Building</td>
        <td><input style="width:5em" ng-model="building"
          maxlength="3" ng-maxlength="3" type="number"
          ng-change="update()" tabindex="2" name="building"/>
          hours
          <span class="oops" ng-show="estimate.building.$error.pattern">oops!</span></td>
      </tr>
      <tr>
        <td>Fixing</td>
        <td><input style="width:7em" ng-model="hoc" maxlength="6"
          ng-maxlength="6" type="number"
          ng-change="update()" tabindex="3" name="hoc"/>
          <a href="http://www.yegor256.com/2014/11/14/hits-of-code.html">hits of code</a>
          <span class="oops" ng-show="estimate.hoc.$error.pattern">oops!</span></td>
      </tr>
    </tbody>
  </table>
</form>

This is an estimate of a total budget:

<style type="text/css">
  .r {
    text-align: right;
  }
  .b {
    font-weight: bold;
  }
  .oops {
    color: red;
  }
  .tbl {
    width: 100%;
    font-size: 0.8em;
    font-family: monospace;
  }
</style>
<table class="tbl">
  <colgroup>
    <col style="width:2em"/>
    <col/>
    <col style="width:6em"/>
  </colgroup>
  <tbody>
    <tr><td></td><th colspan="2">Thinking</th></tr>
    <tr><td>SA</td><td>Analysis (&#x7B;&#x7B; thinking &#x7D;&#x7D; hours, $75/hour)</td><td class="r">&#x7B;&#x7B; dollars(sa) &#x7D;&#x7D;</td></tr>
    <tr><td></td><th colspan="2">Building</th></tr>
    <tr><td>A</td><td>Prototype (&#x7B;&#x7B; building &#x7D;&#x7D; hours, $100/hour)</td><td class="r">&#x7B;&#x7B; dollars(a) &#x7D;&#x7D;</td></tr>
    <tr><td></td><th colspan="2">Fixing</th></tr>
    <tr><td>P</td><td>Paid to programmers</td><td class="r">&#x7B;&#x7B; dollars(p) &#x7D;&#x7D;</td></tr>
    <tr><td>TM</td><td>Technical margin (100% of P)</td><td class="r">&#x7B;&#x7B; dollars(tm) &#x7D;&#x7D;</td></tr>
    <tr><td colspan="2" class="r">Total</td><td class="r b" style="border-top: 1px solid gray;">&#x7B;&#x7B; dollars(sa+a+p+tm) &#x7D;&#x7D;</td></tr>
  </tbody>
</table>

These are some key performance indicators:

<table class="tbl">
  <colgroup>
    <col style="width:2em"/>
    <col/>
    <col style="width:6em"/>
  </colgroup>
  <tbody>
    <tr><td>T</td><td>Tasks completed</td><td class="r">&#x7B;&#x7B; round(t) &#x7D;&#x7D;</td></tr>
    <tr><td>PR</td><td>Pull requests merged</td><td class="r">&#x7B;&#x7B; round(pr) &#x7D;&#x7D;</td></tr>
    <tr><td>H</td><td>Total hours spent</td><td class="r">&#x7B;&#x7B; round(h+thinking+building) &#x7D;&#x7D;</td></tr>
    <tr><td>R</td><td>Avg. hourly rate of a programmer</td><td class="r">&#x7B;&#x7B; dollars(r) &#x7D;&#x7D;</td></tr>
    <tr><td>CT</td><td>Cost per hit-of-code</td><td class="r">&#x7B;&#x7B; dollars((p+tm+pm+mf+sa+a) / hoc, 2) &#x7D;&#x7D;</td></tr>
    <tr><td>CH</td><td>Cost per hour</td><td class="r">&#x7B;&#x7B; dollars((p+tm+pm+mf+sa+a) / (h+building+thinking), 2) &#x7D;&#x7D;</td></tr>
  </tbody>
</table>

**P**: Each member of the team has its own hourly
rate. We pay them directly and then ask you to reimburse these expenses.
We may also charge a few percents on top of these for PayPal, oDesk, wire
transfer fees we have when trasferring money to programmers.

**TM**: This is our margin on top of what programmers get.
Each project has a project manager who also works
remotely and manages the entire team. His responsibilities include
task tracking, project planning, schedule/budget control,
recruiting/discharging programmers, etc.
This money covers all our expenses and investments into
new technologies we develop in [campus](/campus.html), mostly open source.
There are a few important
tools that we use to optimize the development and make this entire
distributed model of work possible, including [rultor](http://www.rultor.com),
[pdd](https://github.com/teamed/pdd),
[qulice](http://www.qulice.com) static analyzer,
set of [jcabi](http://www.jcabi.com) libraries, etc.
Besides that, we pay
for build servers, continuous integration environment, test environments, etc.

<script src="/js/calc.js"></script>
