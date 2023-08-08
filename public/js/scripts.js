/*!
 * Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//
var input_mode;
var _msgKey = 0;
window.addEventListener('DOMContentLoaded', event => {

    //loadData();


    $('li.linav').click(function () {
        console.log('liclick');
        $('li > a.active').removeClass("active");
        $('li > div > a.active').removeClass("active");
        $(this).find('.nav-link').addClass("active");


        // $(this).addClass("active");
    });




    // Navbar shrink function
    var navbarShrink = function () {


        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    //  navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);


    // Activate Bootstrap scrollspy on the main nav element
    /*const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };*/

    // Collapse responsive navbar when toggler is visible
    /*const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });*/

    //
    /*let submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function(){
        saveDB('post', 'messages');
        console.log('click submit');
    })*/
    var name = GetParameterValues('rowid');



    $('#rowid').val(name);




});

function GetParameterValues(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] == param) {
            return urlparam[1];
        }
    }
}

function chkError() {
    if (document.getElementById("business_name").value == '') {
        $(".invalid-feedback").style = "display:block";

    };
}

function saveDB(_mode, _module) {

    //chkError();

    event.preventDefault();


    let datas = "";
    let formBody = document.getElementById("contactForm");

    var elemVal = '';
    console.log(formBody);


    //
    let form_elem = formBody.querySelectorAll(".form-control, .form-check-input");
    form_elem.forEach(_elem => {
        elemVal = _elem.value;
        datas += '"' + _elem.id + '"' + " : " + '"' + elemVal + '"' + ",";
    });



    console.log(datas);

    datas = datas.slice(0, -1);
    datas = JSON.parse('{' + datas + '}');
    let _url = _module;
    input_mode = 'POST';

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: _url,
        method: _mode,
        data: datas,
        success: function (xhr) {
            console.log(xhr.status);
            if (xhr.status == "success") {
                validateForm("contactForm");
                fnSuccess("contactForm");
                /*alert(xhr.report);*/
                displayMsg("#msgBoxMain", xhr.status, xhr.report, _module);
                //window.scrollTo(0, 0);
                //validateForm("contactForm");

                /*if(module == "setup_menu"){
                     let appl_code = document.getElementById('appl_code').value;
                     if(appl_code == "GENSYS")
                         resetSidebar();
                 }
                 if(_mode == 'submit'){
                     displayMsg("#msgBoxMain", xhr.report_type, xhr.report);
                     togglePanel("mainContent");
                 }else{
                     displayMsg("#msgBoxForm", xhr.report_type, xhr.report);
                     $("#formTitle").html("Add New");

                     if(module == 'util_rcbc'){
                         $('#email_add').val('');
                     }else{
                         formAttr("form_data");
                         clearForm("form_data");
                     }
                 }
                 validateForm("form_data");

                 if(input_mode == "POST"){
                     $("#tbl_main").DataTable().ajax.reload();
                 }else{
                     $("#tbl_main").DataTable().ajax.reload(null, false);
                 }*/

            } else if (xhr.report_type == "info") {
                displayMsg("#msgBoxForm", xhr.report_type, xhr.report, _module);
                validateForm("contactForm");
            } else {
                validateForm("contactForm", xhr.report);
                if (_module == 'portfolio') window.scrollTo(0, 0);
            }
        },
        error: function (xhr, status) {
            if (xhr.responseJSON.status == 'inactive') {
                displayMsg("#msgBoxForm", 'info', xhr.responseJSON.report, _module);
                setTimeout(function () {
                    window.location.href = "login";
                }, 3000);
            }
        },
        complete: function (xhr, txtstat) {
            if (xhr.responseJSON.status != 'inactive') {
                savedb_stat = true;
                menu_stat = true;
                //btnOptGroupAttr();
            }

        }
    });
}

async function loadData() {



    let result = await $.ajax({
        url: "projects",
        method: "GET"
    });


    let rLength = result.data.length;
    let divLClass;
    if (rLength < 4) {
        divLClass = "col-xs-4";
    } else divLClass = "col-xs-3";

    let noMainDev = Math.ceil(rLength / 4);

    /*create divMainCard*/


    let sidebar1 = document.getElementById('divProjects');
    for (let i = 0; i < noMainDev; i++) {

        let divMCardMain = document.createElement('DIV');
        divMCardMain.className = "card-group col-12 text-center ";
        divMCardMain.id = "divMainCard" + i;
        sidebar1.appendChild(divMCardMain);
    }


    var xctr = 0;
    var xxx = 0;
    result.data.forEach(_menu => {

        const divCard = document.body.querySelector('#' + _menu.disc_code);
        //const divCard = document.body.querySelector('.card-sourcing');

        const divCardHeader = document.body.querySelector('#' + _menu.disc_code + _menu.proj_type);



        if (xctr == 0) {
            xxx = 0;
        } else xxx = Math.floor(xctr / 4);


        const sidebar = document.getElementById('divMainCard' + xxx);

        if (!divCard) {

            let divMCard = document.createElement('DIV');
            divMCard.className = "card card-sourcing " + divLClass;
            divMCard.id = _menu.disc_code;

            let divMCardB = document.createElement('DIV');
            divMCardB.className = "card-body";
            divMCardB.id = 'body-' + _menu.disc_code /*+ _menu.proj_code*/ ;

            /*let ul = document.createElement('UL');
                ul.className = "ulproject list-inline";
                ul.id = "ul" + _menu.disc_code;*/

            divMCard.append(divMCardB);
            //divMCardB.appendChild(ul);

            let divMCardT = document.createElement('H3');
            divMCardT.className = "card-title text-dark";
            divMCardT.innerHTML = _menu.disc_desc;

            let divHR = document.createElement('HR');


            divMCardB.prepend(divMCardT);
            divMCardT.append(divHR);

            /*divMCardB.append(divMCardT);
            divMCardB.append(ul);
            divMCard.append(divMCardB);*/

            sidebar.appendChild(divMCard);
            xctr++;
        }

        /*create div for each projtype*/


        //let ulList = document.getElementById("ul" + _menu.disc_code);

        const divCardBody = document.getElementById('body-' + _menu.disc_code);
        const ulExist = document.body.querySelector('.ulproject' + _menu.disc_code + _menu.proj_type);
        //document.getElementById('body-' + _menu.disc_code);
        let divHeaderHTML = '';


        if (_menu.proj_type == '1') divHeaderHTML = 'ONGOING';
        else divHeaderHTML = 'PROSPECTIVE';

        let divMCardHeader = document.createElement('DIV');
        divMCardHeader.className = "card-header diveachul" + _menu.disc_code + _menu.proj_type;
        divMCardHeader.id = _menu.disc_code + _menu.proj_type;
        divMCardHeader.innerHTML = '<i style="font-size: 12px;" class="fas fa-thumbtack"></i>&nbsp;&nbsp;&nbsp;' + divHeaderHTML;
        divMCardHeader.style = 'text-align: left; font-weight: bold; background-color: transparent; border-bottom: 0!important';

        let ul = document.createElement('UL');
        ul.className = "list-inline  ulproject" + _menu.disc_code + _menu.proj_type;
        ul.id = "ul" + _menu.disc_code + _menu.proj_type
        ul.style = "text-align: center!important";


        if (!divCardHeader && divCardBody != null) divCardBody.append(divMCardHeader);

        const diveachul = document.body.querySelector('.diveachul' + _menu.disc_code + _menu.proj_type);
        if (diveachul != null && !ulExist) {
            diveachul.appendChild(ul);

        }

        let li = document.createElement('LI');
        li.className = "nav-item liCard";

        let anchor = document.createElement('A');
        anchor.className = "btn";
        anchor.href = "portfolio?rowid=" + _menu.id;
        /*anchor.target = "_blank";*/
        anchor.innerHTML = _menu.proj_desc;

        li.append(anchor);

        let ulList = document.getElementById("ul" + _menu.disc_code + _menu.proj_type);

        if (ulList != null) ulList.appendChild(li);






    })

    document.getElementById('emaileei').innerHTML = '<i class="fa fa-envelope" style="font-size:16px"></i>&nbsp&nbsp&nbsp&nbsp' + result.email + '&nbsp&nbsp&nbsp&nbsp<i class="fa fa-phone-square" style="font-size:16px"></i>&nbsp&nbsp&nbsp&nbsp' + result.number;

    document.getElementById('urlACcred').href = result.site1;
    document.getElementById('urlforACcred').href = result.site2;
}

function validateForm(_form, _errorBag) {
    tempErrBag = _errorBag;
    let formBody = document.getElementById(_form);
    let form_elem = formBody.querySelectorAll(".form-control:not(.skip-cleaning), .custom-file-input");
    for (let i = 0; i < form_elem.length; i++) {
        form_elem[i].classList.remove('is-invalid');
        form_elem[i].classList.remove('is-valid');
    }
    let feedback = formBody.querySelectorAll('.invalid-feedback');
    for (let i = 0; i < feedback.length; i++) {
        feedback[i].classList.remove('d-block');
    }

    if (_errorBag) {
        for (const [key, value] of Object.entries(_errorBag)) {
            let inputElement = document.getElementById(key);
            if (inputElement)
                inputElement.classList.add("is-invalid");
            if (input_mode == 'PUT' && inputElement.classList.contains('key-field'))
                inputElement.classList.remove("is-invalid");

            let inputMsg = document.getElementById(key + "xfeed");
            if (inputMsg) {
                inputMsg.innerHTML = value;
                inputMsg.classList.add('d-block');
            }
        }

        //
        form_elem = formBody.querySelectorAll("input[type='text'].form-control");
        form_elem.forEach(_elem => {
            if (input_mode == 'PUT' && _elem.classList.contains('key-field')) {
                return;
            }

            if (_elem.value != "" && !_elem.classList.contains('is-invalid')) {
                _elem.classList.add("is-valid");
            }
        });

        //
        form_elem = formBody.querySelectorAll("input[type='password'].form-control");
        form_elem.forEach(_elem => {
            if (!_elem.classList.contains('skip-validate-form')) {
                if (_elem.value != "" && !_elem.classList.contains('is-invalid')) {
                    _elem.classList.add("is-valid");
                }
            }
        });

        //
        form_elem = formBody.querySelectorAll("textarea.form-control");
        form_elem.forEach(_elem => {
            if (_elem.value != "" && !_elem.classList.contains('is-invalid')) {
                _elem.classList.add("is-valid");
            }
        });

        //
        form_elem = formBody.querySelectorAll("select.form-control");
        form_elem.forEach(_elem => {
            if (_elem.value != "" && !_elem.classList.contains('is-invalid')) {
                _elem.classList.add("is-valid");
            }
        });

        form_elem = formBody.querySelectorAll(".form-control.skip-cleaning");
        form_elem.forEach(_elem => {
            _elem.classList.remove('is-invalid');
            _elem.classList.remove('is-valid');
        });

        form_elem = formBody.querySelectorAll(".custom-file-input");
        form_elem.forEach(_elem => {
            if (_elem.value != "" && !_elem.classList.contains('is-invalid')) {
                _elem.classList.add("is-valid");
            }
        });
    }
}

function fnSuccess(_form) {
    let formBody = document.getElementById(_form);
    let form_elem = formBody.querySelectorAll("input[type='text'].form-control,input[type='email'].form-control,input[type='tel'].form-control,textarea, .portfoliocls");

    form_elem.forEach(_elem => {

        _elem.value = '';
        _elem.innerHTML = '';
    });

    let form_elem2 = formBody.querySelectorAll(".portfoliocls");

    form_elem2.forEach(_elem => {

        _elem.style = "display:none";
    });



    // $('#divInfoMsgs').style = '';
    //$('#divInfoMsgs').innerHTML('You have successfully submitted your company portfolio. Thank you!');
}

async function uploading(_title, _fldname, _module, _path, _ftype) {
    //attach_title

    var url = 'uploading?fldName=' + _fldname + '&module=' + _module + '&path=' + _path + '&ftype=' + _ftype;
    // console.log(url);
    $('#attach_title').html(_title);
    $('#modalBody').attr('src', decodeURI(url));
    $('#attachModal').modal('show');

}

async function uploadingProposal(_title, _fldname, _module, _path, _ftype, _rowid) {
    //attach_title

    var url = 'uploadingProposal?fldName=' + _fldname + '&module=' + _module + '&path=' + _path + '&ftype=' + _ftype + '&rowid=' + _rowid;
    // console.log(url);
    $('#attach_title').html(_title);
    $('#modalBody').attr('src', decodeURI(url));
    $('#attachModal').modal('show');

}


function fnViewAtt(_mode, _module, _filename, _path, _fldName) {

    let cLass = _fldName + 'cls';
    $('button').remove('.' + cLass);

    if (_filename != '') {

        let divAttach = document.getElementById(_fldName + 'div');
        let btnID = "aOpnFile" + _fldName + _filename;
        let fileDelt = _fldName + 'del';
        let fileToDelt = _fldName + 'todel';

        var hrefLast = document.createElement("A");
        hrefLast.id = btnID;
        hrefLast.style = "display:none";
        hrefLast.href = _path + '/' + _filename;
        hrefLast.target = "_blank";

        var _btn_view = document.createElement("BUTTON");
        _btn_view.type = "button";
        _btn_view.className = "btn btn-secondary  help-btn " + cLass;
        _btn_view.title = "View";
        _btn_view.innerHTML += "<i class='fa fa-search'></i>";
        _btn_view.addEventListener("click", function () {
            document.getElementById(btnID).click();
        });

        var _btn_delete = document.createElement("BUTTON");
        _btn_delete.type = "button";
        _btn_delete.className = "btn btn-danger help-btn " + cLass;
        _btn_delete.title = "Delete";
        _btn_delete.innerHTML += "<i class='fa fa-trash'></i>";
        _btn_delete.addEventListener("click", function () {
            document.getElementById(fileDelt).value = 'yes';
            document.getElementById(fileToDelt).value = _filename;
            document.getElementById(_fldName).value = '';
            _btn_view.style = "display:none";
            _btn_delete.style = "display:none";
        });

        divAttach.append(hrefLast);
        divAttach.append(_btn_view);
        if (_mode == "edit") {
            divAttach.append(_btn_delete)
        };


    }
}

function fnNatType() {
    let formBody = document.getElementById('contactForm');
    var nature_of_business = $("#nature_of_business").val();
    var natparam = document.getElementById('othersnat').value;
    let form_elem = formBody.querySelectorAll(".naturetype");
    console.log(natparam);
    if (nature_of_business == natparam) {
        document.getElementById('type_code').style = "display:block";


        form_elem.forEach(_elem => {

            _elem.style = "display:none";


        });
    } else {
        $('#type_code').val('');
        document.getElementById('type_code').style = "display:none";

        form_elem.forEach(_elem => {

            _elem.style = "display:none";

            if (nature_of_business == _elem.id) {
                _elem.style = "display:block";
            }
        });
    }



    /*let form_elem2 = formBody.querySelectorAll(nature_of_business);
    form_elem.forEach(_elem => {

         _elem.style = "display:block";
    });*/


    //document.getElementById(nature_of_business).style = 'display:block';

}


function fnNatCheck() {

    var form = document.getElementById('contactForm');
    var checkboxes = form.querySelectorAll("input[type='checkbox'].typcheckbox");
    console.log(checkboxes);

    document.getElementById('type_code').value = '';

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            document.getElementById('type_code').value = document.getElementById('type_code').value + checkboxes[i].value + ',';
        }
    }

}

function displayMsg(_msgBoxName, _reportType, _report, _module) {


    let msgBox = document.querySelectorAll(_msgBoxName);
    _reportType = _reportType == 'error' ? 'danger' : _reportType;
    let msgType = _reportType;
    let msgIcon
    switch (_reportType) {
        case 'success':
            msgIcon = "icon fas fa-check";
            break;
        case 'info':
            msgIcon = "fa fa-info";
            break;
        case 'danger':
            msgIcon = "fa fa-times-circle";
            break;
    }
    closeMsgBox = [];

    msgBox.forEach(function (_msgBox) {
        const divBox = document.createElement("DIV");
        divBox.className = "alert alert-" + msgType + " alert-dismissible fade show";
        console.log(_msgBox);
        /*const  divBtn = document.createElement("BUTTON");
        divBtn.type = "button";
        divBtn.className = "close btn";
        divBtn.style = "text-align: right !important";
        divBtn.id = "msgBoxBtn_"+_msgKey;
        divBtn.setAttribute("data-bs-dismiss", "alert");
        divBtn.setAttribute("aria-hidden", "true");
        divBtn.innerHTML = '<li class="fas fa-times"></li>';
        closeMsgBox[_msgKey] = setTimeout(function(){
                divBtn.click();
            }, 10000);
        divBtn.addEventListener("click" , function(){
            clearTimeout(closeMsgBox[_msgKey]);
            divBtn.click();
        });
        divBox.append(divBtn);*/

        const divMsg = document.createElement("H6");
        divMsg.className = "mb-0";
        divMsg.innerHTML = '<i class="' + msgIcon + ' mr-3"></i> ' + _report;
        divBox.append(divMsg);

        _msgBox.append(divBox);
        _msgKey++;
    });


    if (_module == 'message') {} else
        window.scrollTo(0, 0);

    if (_module == 'portfolio') {
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);
        const product = urlParams.get('rowid')

        $('#rowid').val(product)
    }
}


function fnChangeTab(tab, curtab) {
    document.getElementById(tab).style = "display:block";
    document.getElementById(curtab).style = "display:none";
}

function fnOpen(path) {




}


function fnCheck(fldname) {
    var _btn = document.getElementById(fldname);
    if (_btn.checked == true) {
        _btn.value = 'true';
        $("#pbsubmit").attr("disabled", false);
        //$('#pbsubmit').removeClass("disabled");

    } else {
        _btn.value = '';
        $("#pbsubmit").attr("disabled", true);
    }
}


function loadDatatable() {


    let datas = "";



    let rowid = $("#rowid").val();

    if (rowid != undefined) {
        datas += '"rowid' + '":"' + rowid + '",';
    }

    datas = datas.slice(0, -1);
    datas = JSON.parse('{' + datas + '}');


    let tblMain = $("#tbl_main").DataTable({
        lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
        dom: 'Bfrtip',
        responsive: true,
        autoWidth: false,
        ordering: true,
        dom: 'frt<"bottom"<"row"<"col-sm-12 col-md-6"li><"col-sm-12 col-md-6"p>>>',
        processing: true,
        serverSide: true,
        language: {
            processing: '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><br><span>Loading...</span> ',
            searchPlaceholder: "Search and Press Enter"
        },
        ajax: {
            url: "materials_index",
            data: datas,
            dataSrc: function (json) {
                DT_data = [];
                DT_data = json.data;
                DT_data.sort(function (a, b) {
                    return b.id - a.id
                });


                return json.data;
            },
        },
        columns: DT_cols,
        drawCallback: function (settings) {

        },
        columnDefs: [{
            "targets": '_all',
            "createdCell": function (td, cellData, rowData, row, col) {
                $(td).css('padding', '5px')
            }
        }],
        initComplete: function (s, j) {
            menu_stat = true;

            document.getElementById("tbl_main_filter").style = "display:none";

            //$('#tbl_main_filter').style = "display:none";
            /*if(j.filters){
                createFilter(j.filters);
            }

            if (j.statuss){
                createSSS(j.statuss);
            } */

        }
    });

    // Add Gray Screen
    let divTblMain = document.createElement("DIV");
    divTblMain.style.position = "relative";
    divTblMain.append(document.getElementById("tbl_main"));
    document.getElementById("tbl_main_processing").before(divTblMain);

    let grayScreen = document.createElement("DIV");
    grayScreen.className = "bg-gray position-absolute col-12";
    grayScreen.id = "tbl_gray_screen";
    grayScreen.style.top = 0;
    grayScreen.style.left = 0;
    grayScreen.style.bottom = 0;
    grayScreen.style.opacity = 0.5;
    divTblMain.prepend(grayScreen);

    tblMain.on('processing.dt', function (e, settings, processing) {
        $('#tbl_gray_screen').css('display', processing ? 'block' : 'none');
    });

    tblMain.on('error.dt', function (e, settings, techNote, message) {

    });

    $('#tbl_main_filter input').unbind();
    $('#tbl_main_filter input').bind('keyup', function (e) {

        if (e.keyCode == 13) {
            tblMain.search(this.value).draw();
        }

        if (e.target.value == '') {
            tblMain.search(this.value).draw();
        }

    });

    $('input[type=search]').on('search', function () {
        tblMain.search(this.value).draw();
    });

    let tbl_filter = document.getElementById("tbl_main_filter");



    /*printing*/
    let btn_pdf = document.createElement("BUTTON");
    btn_pdf.id = "tbl_main_btn_pdf";
    btn_pdf.title = "Download PDF";
    btn_pdf.className = "btn btn-primary text-white mr-1";
    btn_pdf.innerHTML = '<li class="fa fa-file-pdf"></li>';
    btn_pdf.addEventListener("click", function () {

        var doc = new jsPDF('p', 'pt');
        var tble = document.getElementById('tbl_main');
        var row = tble.rows; // Getting the rows

        var opt = 0;

        for (var i = 0; i < row[0].cells.length; i++) {
            var str = row[0].cells[i].innerHTML;
            if (str.search("Options") != -1) {
                for (var j = 0; j < row.length; j++) {
                    opt = i;
                }
            }
        }

        var res = doc.autoTableHtmlToJson(tble);
        var cols = res.columns.splice(0, opt);
        doc.autoTable(cols, res.data);
        doc.save(module + ".pdf");

        //loadDatatable();

    });

    let btn_csv = document.createElement("BUTTON");
    btn_csv.id = "tbl_main_btn_csv";
    btn_csv.title = "Download CSV";
    btn_csv.className = "btn btn-primary text-white mr-1";
    btn_csv.innerHTML = '<li class="fa fa-file-excel"></li>';
    btn_csv.addEventListener("click", function () {

        let data = "";
        const tableData = [];

        /*var tble = document.getElementById('tbl_main');
        var row = tble.rows; // Getting the rows */

        var tble = document.getElementById('tbl_main');
        var rows = tble.rows; // Getting the rows

        var opt = 0;

        for (var i = 0; i < rows[0].cells.length; i++) {
            var str = rows[0].cells[i].innerHTML;
            if (str.search("Options") != -1) {
                for (var j = 0; j < rows.length; j++) {
                    opt = i;
                }
            }
        }

        for (const row of rows) {
            const rowData = [];
            for (const [index, column] of row.querySelectorAll("th, td").entries()) {
                // To retain the commas in the "Description" column, we can enclose those fields in quotation marks.
                if ((index + 1) % 3 === 0) {
                    rowData.push('"' + column.innerText.replace(/,/g, '') + '"');
                } else {
                    rowData.push(column.innerText.replace(/,/g, ''));
                }
            }
            rowData.splice(opt, 1);
            tableData.push(rowData.join(","));
        }
        data += tableData.join("\n");
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([data], {
            type: "text/csv"
        }));
        a.setAttribute("download", module + ".csv");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    });







    let tbl_main_wrapper = document.getElementById('tbl_main_wrapper');
    let col_fiter = document.createElement('DIV');
    col_fiter.id = 'column_filters';
    col_fiter.className = 'row mb-3';
    //tbl_filter.after(col_fiter);


}




var filter_prev_val = [];

function createFilter(filters) {
    let col_filter = document.getElementById("tbl_main_filter");
    let btnReset = document.getElementById("btnReset");
    let btnFilter = document.getElementById("btnFilter");
    let divBtnsFilterID = document.getElementById("divBtnsFilterID");

    if (btnReset) btnReset.innerHTML = '';
    if (btnFilter) btnFilter.innerHTML = '';
    if (divBtnsFilterID) $(divBtnsFilterID).remove();
    // divBtnsFilterID.innerHTML = 'col-sm-3 col-md-3'col-sm-3 col-md-3;
    //  Create Buttons
    let div_btn = document.createElement('DIV');
    div_btn.id = 'divBtnsFilterID';
    div_btn.className = 'col-xs-3 btn-group';
    div_btn.style = 'padding-left: 10px!important;padding-bottom:5px;';

    let btn_filter_apply = document.createElement('BUTTON');
    btn_filter_apply.id = 'btnFilter';
    btn_filter_apply.className = 'btn btn-sm btn-primary';
    btn_filter_apply.innerHTML = 'Filter';
    btn_filter_apply.addEventListener('click', function () {

        let tblMain = $('#tbl_main').DataTable();
        let searchFld = $('input[type=search]').val();

        $('#tbl_main_filter input').unbind();

        tblMain.search(searchFld).draw();

        $('input[type=search]').on('search', function () {

            tblMain.search(this.value).draw();
        });


    });
    div_btn.append(btn_filter_apply);

    let btn_filter_reset = document.createElement('BUTTON');
    btn_filter_reset.id = 'btnReset';
    btn_filter_reset.className = 'btn btn-sm btn-secondary';
    btn_filter_reset.innerHTML = 'Reset';
    btn_filter_reset.addEventListener('click', function () {
        $('input[type=search]').val('');
        $("#cbType").val('');
        ptype = '';
        ctype = '';
        btn_filter_apply.click();
    });
    div_btn.append(btn_filter_reset);

    col_filter.append(div_btn);
}


function setCols() {


    DT_cols = [{
            "data": "mat_cat_desc",
            "name": "mat_cat_desc"
        },
        {
            "data": "mat_desc",
            "name": "mat_desc"
        }
    ];

}

function search() {
    let input = document.getElementById('fiSearchfqs').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('accordion-header');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "block";
        }
    }
}
