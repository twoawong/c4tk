---
title: Mentors
cwd: src/content/events/seattle/2014/teamfortress
---

## the team

<div align="center">
<img src="{{assets}}/images/tf2/tf2.jpg" height="397.5" width="750" style="margin-bottom:50px">
</div>

{{#compose src='*.md' cwd=cwd}}
<p class="mentor-titles">
    MEET THE {{@name}}
</p>
<section>
    <span class="tf2">
    ![{{@name}}]({{assets}}/images/tf2/{{@picture}} "{{@name}}")
    </span>
    <p>
        {{{@content}}}
    </p>
</section>
{{/compose}}
