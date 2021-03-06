---
layout: default
title: "Join Us"
permalink: /join.html
description:
  In order to hire you, we have to collect some basic
  information.
keywords:
  - hire software developer
  - remote programmer hire
  - hire programmer
  - start working remotely
  - hire a programmer
---

If you're passionate about software development
and quality, we want to work with you. You should know,
though, that our [coding standards](http://www.yegor256.com/2014/08/13/strict-code-quality-control.html)
are unexpectedly high for most newcomers. Moreover, our work model
[differs](http://www.yegor256.com/2014/04/17/how-xdsd-is-different.html)
from anything you've probably seen before. But you
shouldn’t be scared &mdash; just be ready to improve :)

We offer flexible, part-time work you can perform
from anywhere. In most cases, we expect you to spend up
to 10 hours per week blending our projects into your other full-time work.

Our projects are both challenging and interesting. You
will solve difficult problems, work with cutting-edge technologies,
and collaborate with skilled professionals. There are no
routine or boring tasks here.

You should expect to work on small, well-defined tasks
(usually 30 minutes each) personally selected to fit your
skills and experience. We even [encourage](http://www.yegor256.com/2014/04/13/no-obligations-principle.html)
our developers to reject
tasks if they don't feel like they're a good fit.

We pay you immediately after a task is completed, either
through [Upwork](http://www.upwork.com), [PayPal](http://www.paypal.com),
or [Bitcoins](https://bitcoin.org/en/),
according to the budget allocated for the task multiplied by your hourly rate.
Say, for example, that your rate is [$50 per hour](http://www.yegor256.com/2014/10/29/how-much-do-you-cost.html)
and the task budget is 30 minutes.
You will get $25 immediately after the task is completed. Here is a
[sample](/engineer.pdf) of our contract.

Please fill out this form if you want to try.

<form name="form" id="form" data-ng-submit="form.$valid &amp;&amp; submit('#form');">
  <p>
    <label>Your full name</label>
    <br/>
    <input name="name" style="width:17em" tabindex="1"
      data-ng-required="true" required="true"
      maxlength="100" data-ng-model="name"/>
  </p>
  <p>
    <label>Hourly rate (in U.S. dollars)</label>
    <br/>
    <input name="rate" type="number" tabindex="2"
      data-ng-required="true" required="true"
      style="width:5em" data-ng-model="rate"/><br/>
    <span class="help">Keep this article in mind:
    <a href="http://www.yegor256.com/2014/10/29/how-much-do-you-cost.html">How Much Do You Cost?</a>
    If your rate is lower than $20 per hour, don't bother; we most
    likely won't accept you.</span>
  </p>
  <p>
    <label>Skills</label>
    <br/>
    <input name="skills" tabindex="3"
      data-ng-required="true" required="true"
      pattern="([0-9A-Za-z+\- ]+,?)+" placeholder="([0-9A-Za-z+\- ]+,?)+"
      style="width:16em" maxlength="150" data-ng-model="skills"/><br/>
    <span class="help">Comma-separated list of skills you're good at; for example,
    "Java, C++" or "UML." No more than three, please.</span>
  </p>
  <p>
    <label>Phone number</label>
    <br/>
    <input name="phone" style="width:10em" tabindex="4"
      data-ng-required="true" required="true"
      pattern="[0-9.\-+ ]+" placeholder="[0-9.\-+ ]+"
      maxlength="20" data-ng-model="phone"/><br/>
    <span class="help">Our customers require us to collect this information
    from all our engineers, programmers, testers, DevOps, etc. We have
    to know who we're working with in order to guarantee our clients
    a certain level of security for their sensitive information. We won't
    call or mail you.</span>
  </p>
  <p>
    <label>Country</label>
    <br/>
    <input name="country" style="width:11em" tabindex="5"
      data-ng-required="true" required="true"
      pattern="[a-zA-Z ]+" placeholder="[a-zA-Z ]+"
      maxlength="50" data-ng-model="country"/>
  </p>
  <p>
    <label>Postal address</label>
    <br/>
    <input name="address" style="width:20em" tabindex="6"
      data-ng-required="true" required="true"
      maxlength="150" data-ng-model="address"/>
  </p>
  <p>
    <label>Email</label>
    <br/>
    <input name="email" type="email" tabindex="7"
      data-ng-required="true" required="true"
      style="width:17em" maxlength="100" data-ng-model="email"/>
  </p>
  <p>
    <label><a href="https://github.com">GitHub</a> account name</label>
    <br/>
    <input name="github" type="text" tabindex="8"
      data-ng-required="true" required="true"
      placeholder="[a-zA-Z0-9\-]+" pattern="[a-zA-Z0-9\-]+"
      style="width:13em" maxlength="50" data-ng-model="github"/><br/>
    <span class="help">As <a href="http://www.yegor256.com/2014/10/07/stop-chatting-start-coding.html">this article</a> explains,
    we exclusively use GitHub tickets to communicate in a project; no
    emails, chats, meetings, or phone calls.</span>
  </p>
  <p>
    <label><a href="http://www.netbout.com">Netbout</a> account name</label>
    <br/>
    <input name="netbout" style="width:13em" tabindex="9"
      data-ng-required="true" required="true"
      placeholder="[a-zA-Z0-9]+" pattern="[a-zA-Z0-9]+"
      maxlength="50" data-ng-model="netbout"/><br/>
    <span class="help">We use Netbout for non-project discussions
    related to payments, disciplinary actions, ratings, performance
    appraisals, etc. Netbout integrates our management and automated
    reporting tools. If you don't have a Netbout account, create one now;
    it should take less than a minute. Don't forget to register your email
    there to stay tuned for updates.</span>
  </p>
  <p>
    <label>Your personality code</label>
    <br/>
    <input name="personality" style="width:9em" tabindex="10"
      data-ng-required="true" required="true"
      placeholder="[a-zA-Z\-]+" pattern="[a-zA-Z\-]+"
      maxlength="8" data-ng-model="personality"/><br/>
    <span class="help">Please, take
      this <a href="http://www.16personalities.com/">5-minutes test</a>
      to identify your personality profile. They will give you a five-letter
      code, post it here. It won't affect our decision anyhow, we just
      want to know you better.</span>
  </p>
  <p>
    <label>How do we pay you?</label>
    <br/>
    <input name="wallet" style="width:13em" tabindex="11"
      data-ng-required="true" required="true"
      maxlength="100" data-ng-model="wallet"/><br/>
    <span style="float:right">
      <img src="/images/wallet/paypal.png" style="width:50px;height:50px;" alt="PayPal logo"/>
      <img src="/images/wallet/bitcoin.png" style="width:50px;height:50px;" alt="Bitcoin logo"/>
      <img src="/images/wallet/upwork.png" style="width:50px;height:50px;" alt="Upwork logo"/>
    </span>
    <span class="help">There are three options at the moment:
    <a href="http://www.paypal.com">PayPal</a>,
    <a href="http://www.bitcoin.org">Bitcoin</a>,
    or <a href="http://www.upwork.com">Upwork</a>.
    If you want us to pay through PayPal, just give us the email of
    your PayPal account.
    If you prefer Bitcoins, give us the address of your <a href="https://en.bitcoin.it/wiki/Address">BTC address</a>.
    If you want to use Upwork, provide us a link to your Upwork profile.</span>
  </p>
  <p>
    <label>Tell us briefly about yourself</label>
    <br/>
    <textarea name="info" style="width:100%;height:4em" tabindex="12"
      data-ng-required="true" required="true"
      data-ng-model="info"></textarea><br/>
    <span class="help">Read <a href="http://www.yegor256.com/2014/10/29/how-much-do-you-cost.html">this article</a>
    and explain briefly why you think you're better than
    others and why we should work with you.
    It would be great if you could solve
    <a href="https://github.com/teamed/quiz">this quiz</a>,
    submit a pull request with your corrections, and post the link
    to it right here.</span>
  </p>
  <p>
    <label>How did you find us?</label>
    <br/>
    <input name="ref" style="width:11em" tabindex="13"
      data-ng-required="true" required="true"
      maxlength="200" data-ng-model="ref"/><br/>
    <span class="help">If you have a reference code, post it
      here and the person who gave it to you will receive a bonus
      &mdash; if we hire you :)</span>
  </p>
  <p>
    <button id='submit' tabindex="14">Submit</button>
    via
    <img src="/images/netbout-logo.jpg" alt="netbout"
      style="vertical-align:middle;width:100px;height:22px;"/>
    <br/>
    <span class="help">Right after you click this button, we'll create a new
    conversation in Netbout. One of us will reply to you
    within 24 hours. Keep in mind that we reject over 80 percent of
    applications. By clicking this button you accept terms and
    conditions expressed in <a href="/engineer.pdf">this document</a>.</span>
  </p>
</form>

<script src="/js/join.js"></script>
