


// Tables-DataTables.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -



$(window).on('load', function () {


    // DATA TABLES
    // =================================================================
    // Require Data Tables
    // -----------------------------------------------------------------
    // http://www.datatables.net/
    // =================================================================

    $.fn.DataTable.ext.pager.numbers_length = 5;


    // Basic Data Tables with responsive plugin
    // -----------------------------------------------------------------
    $('#demo-dt-basic').dataTable({
        "responsive": true,
        "language": {
            "paginate": {
                "previous": '<i class="fa fa-angle-left"></i>',
                "next": '<i class="fa fa-angle-right"></i>'
            }
        }
    });





    // Row selection (single row)
    // -----------------------------------------------------------------
    var rowSelection = $('#demo-dt-selection').DataTable({
        "responsive": true,
        "language": {
            "paginate": {
                "previous": '<i class="fa fa-angle-left"></i>',
                "next": '<i class="fa fa-angle-right"></i>'
            }
        }
    });

    $('#demo-dt-selection').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            rowSelection.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });






    // Row selection and deletion (multiple rows)
    // -----------------------------------------------------------------
    var rowDeletion = $('#demo-dt-delete').DataTable({
        "responsive": true,
        "language": {
            "paginate": {
                "previous": '<i class="fa fa-angle-left"></i>',
                "next": '<i class="fa fa-angle-right"></i>'
            }
        },
        "dom": '<"toolbar">frtip'
    });
    $('#demo-custom-toolbar').appendTo($("div.toolbar"));

    $('#demo-dt-delete tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });

    $('#demo-dt-delete-btn').click(function () {
        rowDeletion.row('.selected').remove().draw(false);
    });






    // Add Row
    // -----------------------------------------------------------------
    var t = $('#demo-dt-addrow').DataTable({
        "responsive": true,
        "language": {
            "paginate": {
                "previous": '<i class="fa fa-angle-left"></i>',
                "next": '<i class="fa fa-angle-right"></i>'
            }
        },
        "dom": '<"newtoolbar">frtip'
    });
    $('#demo-custom-toolbar2').appendTo($("div.newtoolbar"));

    $('#demo-dt-addrow-btn').on('click', function () {
        t.row.add([
			'Adam Doe',
			'New Row',
			'New Row',
			nifty.randomInt(1, 100),
			'2015/10/15',
			'$' + nifty.randomInt(1, 100) + ',000'
        ]).draw();
    });


});

//data table length



$(document).ready(function () {

    var table = $('.dataTable-length').DataTable({
        responsive: true,
        //"sDom": '<"row view-filter"<"col-sm-12"<"pull-left"l><"pull-left"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-right"ip>>>',
        "iDisplayLength": 15,
        "language": {
            "paginate": {
                "previous": '<i class="fa fa-angle-left"></i>',
                "next": '<i class="fa fa-angle-right"></i>'
            }
        },
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        "bSort": false,
        //'bFilter':false

    });

  
    $('.dataTable-length thead tr th').each(function (i) {
        var title = "Search" + $(this).text();

        //$("<input class='form-control input-sm' type='text' />").appendTo($(this));
        table.columns().eq(0).each(function (colIdx) {
            $('input', table.column(colIdx).header()).on('keyup change', function () {
                table
                    .column(colIdx)
                    .search(this.value)
                    .draw();
            });
        });

    });
    
    //Strat searching by dropdown
    $('._ddlStatus')
            .on('change', function () {

                var index = table.column($(this).closest('td')).index();
                table.column(index)
                    .search($(this).val())
                    .draw();
            });
    //End searching by dropdown
   
});
//var count = 1;
//$(document).ready(function () {


    var count = 1;
    $('.editbtn').click(function () {
        
        var flag = $(this).hasClass('save');
        //var currentTD = $(this).parents('tr').find('td');
        //if (flag) {
        //    currentTD = $(this).parents('tr').find('td');
        //    $.each(currentTD, function () {
        //        $(this).prop('contenteditable', true)
        //    });
        //} else {
        //    $.each(currentTD, function () {
        //        $(this).prop('contenteditable', false)
        //    });
        //}

        //$(this).html($(this).html() == "<i class="fa fa-pencil"></i>" ? "<i class='fa fa-times'></i>" : "<i class='fa fa-times'></i>")
        if(flag)
        {
            $(this).removeClass('save').html("<i class='fa fa-pencil'></i>");
            $(this).attr('data-original-title', 'Edit');
        }
        else {
            $(this).addClass('save').html("<i class='fa fa-floppy-o'></i>");
            $(this).attr('data-original-title', 'Save');
        }

    });

   
//});



//blank table with add row

//$(document).ready(function () {
//    var i = 1;
//    $("#add_row").click(function () {

//        $('#cuaddr' + i).html(" <td><input type='text'/></td><td ><input type='text'/></td><td ><input type='text'/></td><td><input type='text'/></td><td class='text-center'><div class='btn-group'><a href='javascript:void(0)' data-toggle='tooltip' title='Edit' class='btn btn-xs btn-default'><i class='fa fa-pencil'></i></a></div> <div class='btn-group'><a href='javascript:void(0)' data-toggle='tooltip' title='Delete' class='btn btn-xs btn-danger'><i class='fa fa-times'></i></a> </div></td>");

//        $('#tab_logic').append('<tr id="cuaddr' + (i + 1) + '"></tr>');
//        i++;
//    });
//    //$("#delete_row").click(function () {
//    //    if (i > 1) {
//    //        $("#addr" + (i - 1)).html('');
//    //        i--;
//    //    }
//    //});

//});
//$(document).ready(function () {
//    var i = 1;
//    $("#add_mainlicence").click(function () {

//        $('#mladdr' + i).html(" <td><input type='text'/></td><td ><input type='text'/></td><td ><input type='text'/></td><td><input type='text'/></td><td class='text-center'><div class='btn-group'><a href='javascript:void(0)' data-toggle='tooltip' title='Edit' class='btn btn-xs btn-default'><i class='fa fa-pencil'></i></a></div> <div class='btn-group'><a href='javascript:void(0)' data-toggle='tooltip' title='Delete' class='btn btn-xs '><i class='fa fa-upload'></i></a> </div></td>");

//        $('#tab_mainlicence').append('<tr id="cuaddr' + (i + 1) + '"></tr>');
//        i++;
//    });
//    //$("#delete_row").click(function () {
//    //    if (i > 1) {
//    //        $("#addr" + (i - 1)).html('');
//    //        i--;
//    //    }
//    //});

//});

/*check box js*/
$('input[type="checkbox"]').change(function (e) {

    var checked = $(this).prop("checked"),
        container = $(this).parent(),
        siblings = container.siblings();

    container.find('input[type="checkbox"]').prop({
        indeterminate: false,
        checked: checked
    });

    function checkSiblings(el) {

        var parent = el.parent().parent(),
            all = true;

        el.siblings().each(function () {
            return all = ($(this).children('input[type="checkbox"]').prop("checked") === checked);
        });

        if (all && checked) {

            parent.children('input[type="checkbox"]').prop({
                indeterminate: false,
                checked: checked
            });

            checkSiblings(parent);

        } else if (all && !checked) {

            parent.children('input[type="checkbox"]').prop("checked", checked);
            parent.children('input[type="checkbox"]').prop("indeterminate", (parent.find('input[type="checkbox"]:checked').length > 0));
            checkSiblings(parent);

        } else {

            el.parents("li").children('input[type="checkbox"]').prop({
                indeterminate: true,
                checked: false
            });

        }

    }

    checkSiblings(container);
});