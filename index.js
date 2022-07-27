// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var DIALOG = `<div class="mDialog ds-none w-editor-access" id="CrossCitationModule">
    <div class="dialog-container">
        <div class="dialog-content">
            <!-- header -->
            <div class="dia_header_div">
                <div class="dia_header_text">Insert Cross Citation</div>
                <div class="ml-auto" title="Close" onclick="CitationNewModule.closeDialog(this)"><img class="n_Img" src="UI/svg/dialogClose.svg"></div>
            </div>
            <!-- body -->
            <div class="d-flex flex-column crossref-body">
                <!-- Top options -->
                <div class="d-flex justify-content-around x-ref-menu">
                    <div class="d-flex cross-Menu active" id="rDivbtn" onclick="CitationNewModule.onChangeTab(this)" data-list="rDiv" data-role="bibr" title="References">
                        <div class="cross-Menu-items">
                            <img src="UI/svg/xDialogRef_1.svg?${new Date().getTime()}" id="xRefimg" class="xRefDialogImg">
                            <!--<span class='float-name'>References</span><i class="fa fa-angle-down" aria-hidden="true"></i>-->
                        </div>
                    </div>
                    <div class="d-flex cross-Menu" id="fDivbtn" onclick="CitationNewModule.onChangeTab(this)" data-list="fDiv" data-role="fig" title="Figures">
                        <div class="cross-Menu-items">
                            <img src="UI/svg/xDialogFigure.svg?${new Date().getTime()}" id="xFigimg" class="xRefDialogImg">
                            <!--<span class='float-name'>Figures</span><i class="fa fa-angle-down" aria-hidden="true"></i>-->
                        </div>
                    </div>
                    <div class="d-flex cross-Menu" id="tDivbtn" onclick="CitationNewModule.onChangeTab(this)" data-list="tDiv" data-role="table" title="Tables">
                        <div class="cross-Menu-items">
                            <img src="UI/svg/xDialogTable.svg?${new Date().getTime()}" id="xTabimg" class="xRefDialogImg">
                            <!--<span class='float-name'>Tables</span><i class="fa fa-angle-down" aria-hidden="true"></i>-->
                        </div>
                    </div>
                    <div class="cross-Menu ds-none" id="sDivbtn" onclick="CitationNewModule.onChangeTab(this)" data-list="sDiv" data-role="section" title="Sections">
                        <div class="cross-Menu-items"><img src="UI/svg/xDialogSection.svg?${new Date().getTime()}" id="xSecimg" class="xRefDialogImg"></div>
                    </div>
                </div>
                <!-- Option and button -->
                <div class="d-flex justify-content-center align-items-center" id="OptionButRow1">
                    <div class="flex-column">
                        <div class="cross-chk d-flex mt-3">
                            <div class="">
                                <input type="text" autocomplete="off" class="form-control" id="myLinkShowText" aria-label="Input Cross Citation Text" title="Input Text">
                            </div>
                            <div class="d-flex justify-content-center align-items-center pl-1">
                                <div class="bracket-div" title="In Direct" id="divbracket">
                                        <span class="bracket pl-1">[</span>
                                        <input type="checkbox" aria-label="With Bracket" class="withbracket" id="withbracket">
                                        <span class="bracket">]</span>
                                    </div>
                                <button type="button" class="btn btn-sm primary-btn ml-3" id="insertCite" title="Insert">Insert</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- search -->
                <div class="d-flex xref-search mt-3" id="OptionButRow2">
                    <div class="d-flex pl-3">
                        <input type="text" autocomplete="off" class="form-control xsearch" id="CrossRef_Search" placeholder="Search">
                        <i class="fas fa-search text-grey" id="x-search" aria-hidden="true" title="Search"></i>
                    </div>
                    <div class="d-flex pr-3 ml-auto">
                        <button id="addnewitem" type="button" class="btn secondary-btn btn-sm" title="Add New">Add New</button>
                    </div>
                </div>
                <!-- Listing the floats -->
                <div class="d-flex mt-2 float-item">
                    <div class="d-flex flex-fill float-div" id="float-div">
                        <div class="flex-column flex-fill float-list-group" id="rDiv"></div>
                        <div class="flex-column flex-fill float-list-group d-none" id="fDiv"></div>
                        <div class="flex-column flex-fill float-list-group d-none" id="tDiv"></div>
                        <div class="flex-column flex-fill float-list-group d-none" id="eDiv"><i class="fa fa-refresh" aria-hidden="true"></i></div>
                        <div class="flex-column flex-fill float-list-group d-none" id="bDiv"><i class="fa fa-refresh" aria-hidden="true"></i></div>
                        <div class="flex-column flex-fill float-list-group d-none" id="sDiv"><i class="fa fa-refresh" aria-hidden="true"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
//console.log('eeee');
//appDiv.appendChild(DIALOG);
