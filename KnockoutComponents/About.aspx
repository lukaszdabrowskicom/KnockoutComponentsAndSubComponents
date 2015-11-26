<%@ Page Title="About" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="About.aspx.cs" Inherits="WebApplication2.About" %>

<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">

    <style>
        .dis {
            display: inline-block;
        }

        .southernGate {
            float: left;
        }
        
        .northernGate {
            float: right;
        }

        .nav {
            position: relative;
            top: 770px;
            left: 85px;
        }

        .item {
            display: inline-block;
            margin-left: 10px;
            font-size: 15px;
        }
    </style>

<div id="message" style="background-color: white; width: 300px; height: 300px; font-size: 40px; color: black; visibility: hidden" data-bind="text: timeToGoHome, tickMessageChecker: timeToGoHome, visible: isMessageVisible">
</div>

<div class="controlPanel">
<div class="southernGate dis">
    <div style="background-color: green; width: 300px; height: 300px;" data-bind="slideGreen: tickGreen, slideSpeed: 4100">
    You have selected the option
    </div>
        <div style="background-color: orange; width: 300px; height: 300px;" data-bind="slideOrange: tickOrange, slideSpeed: 400">
        Driving allowed
    </div>
        <div style="background-color: red; width: 300px; height: 300px;" data-bind="slideRed: tickRed, slideSpeed: 4100">
        You have selected the option 3
    </div>
</div>

<div class="northernGate dis">
    <div style="background-color: green; width: 300px; height: 300px;" data-bind="slideGreen: tickGreen, slideSpeed: 4100">
    You have selected the option
    </div>
        <div style="background-color: orange; width: 300px; height: 300px;" data-bind="slideOrange: tickOrange, slideSpeed: 400">
        Driving allowed
    </div>
        <div style="background-color: red; width: 300px; height: 300px;" data-bind="slideRed: tickRed, slideSpeed: 4100">
        You have selected the option 3
    </div>
</div>

</div>

<br /><br /><br />

<div class="nav">
    <div class="item"><label><input type="checkbox" data-bind="checked: tickGreen" />Tick</label></div>
    <div class="item"><label><input type="checkbox" data-bind="checked: tickOrange" />Tick</label></div>
    <div class="item"><label><input type="checkbox" data-bind="checked: tickRed" />Tick</label></div>
    <input class="item" type="button" value="Countdown" data-bind="click: updateTime" />
</div>

<script src="Scripts/knockout-3.3.0.js"></script>
<script src="Scripts/my.js"></script>

<script type="text/javascript">

    var viewModel = {
        tickGreen: ko.observable(false),
        tickOrange: ko.observable(false),
        tickRed: ko.observable(false),
        unlockGates: ko.observable(true),
        isMessageVisible: ko.observable(false),

        timeToGoHome: ko.observable( <%=  (new DateTime(2015, 10, 8, 16, 0, 0) - DateTime.Now).Seconds %>),

        updateTime: function () {
            setInterval(updateTime, 1000, 1);
            this.isMessageVisible(true);
        }
    };

    ko.applyBindings(viewModel);

    function updateTime(numberOfSeconds) {
        viewModel.timeToGoHome(viewModel.timeToGoHome() - numberOfSeconds);
    }

</script>

</asp:Content>