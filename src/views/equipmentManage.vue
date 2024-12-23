<template>
    <div>
        <div data-v-02677b06="" class="manager-main-right">
            <div data-v-02677b06="">
                <div class="card" style="margin-bottom: 5px;">
                    <div class="el-input el-input--prefix" style="width: 240px;">
                        <!-- input --><!-- prepend slot --><!--v-if-->
                        <div class="el-input__wrapper" tabindex="-1"><!-- prefix slot --><span
                                class="el-input__prefix"><span class="el-input__prefix-inner"><i
                                        class="el-icon el-input__icon"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1024 1024">
                                            <path fill="currentColor"
                                                d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704">
                                            </path>
                                        </svg></i></span></span><input class="el-input__inner" type="text"
                                autocomplete="off" tabindex="0" placeholder="请输入设备名称"
                                id="el-id-2142-297"><!-- suffix slot --><!--v-if--></div><!-- append slot --><!--v-if-->
                    </div>
                    <div class="el-select" style="width: 240px; margin-left: 4px;">
                        <div class="el-select__wrapper el-tooltip__trigger el-tooltip__trigger" tabindex="-1">
                            <!--v-if-->
                            <div class="el-select__selection"><!--v-if-->
                                <div class="el-select__selected-item el-select__input-wrapper is-hidden"><input
                                        type="text" class="el-select__input" autocomplete="off" role="combobox" readonly
                                        spellcheck="false" aria-activedescendant="" aria-controls="el-id-2142-289"
                                        aria-expanded="false" aria-autocomplete="none" aria-haspopup="listbox"
                                        id="el-id-2142-298" style="width: 11px;"><!--v-if-->
                                </div>
                                <div class="el-select__selected-item el-select__placeholder is-transparent">
                                    <span>请选择所属学院</span>
                                </div>
                            </div>
                            <div class="el-select__suffix"><i class="el-icon el-select__caret el-select__icon"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                            d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z">
                                        </path>
                                    </svg></i><!--v-if--><!--v-if--></div>
                        </div>
                    </div>
                    <div class="el-select" style="width: 240px; margin-left: 4px;">
                        <div class="el-select__wrapper el-tooltip__trigger el-tooltip__trigger" tabindex="-1">
                            <!--v-if-->
                            <div class="el-select__selection"><!--v-if-->
                                <div class="el-select__selected-item el-select__input-wrapper is-hidden"><input
                                        type="text" class="el-select__input" autocomplete="off" role="combobox" readonly
                                        spellcheck="false" aria-activedescendant="" aria-controls="el-id-2142-291"
                                        aria-expanded="false" aria-autocomplete="none" aria-haspopup="listbox"
                                        id="el-id-2142-299" style="width: 11px;"><!--v-if-->
                                </div>
                                <div class="el-select__selected-item el-select__placeholder is-transparent">
                                    <span>请选择设备状态</span>
                                </div>
                            </div>
                            <div class="el-select__suffix"><i class="el-icon el-select__caret el-select__icon"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                            d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z">
                                        </path>
                                    </svg></i><!--v-if--><!--v-if--></div>
                        </div>
                    </div><button aria-disabled="false" type="button" class="el-button el-button--info is-plain"
                        style="margin-left: 10px;"><!--v-if--><span class="">查询</span></button><button
                        aria-disabled="false" type="button" class="el-button el-button--warning is-plain"
                        style="margin-left: 10px;"><!--v-if--><span class="">重置</span></button>
                </div>
                <div class="card" style="margin-bottom: 5px;"><button aria-disabled="false" type="button"
                        class="el-button el-button--primary is-plain"><!--v-if--><span
                            class="">新增</span></button><button aria-disabled="false" type="button"
                        class="el-button el-button--danger is-plain"><!--v-if--><span class="">批量删除</span></button>
                </div>
                <div class="card" style="margin-bottom: 5px;">
                    <div class="el-table--fit el-table--scrollable-x el-table--enable-row-transition el-table el-table--layout-fixed is-scrolling-left"
                        data-prefix="el" strip="">
                        <div class="el-table__inner-wrapper">
                            <div class="hidden-columns">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="el-table__header-wrapper">
                                <table class="el-table__header" border="0" cellpadding="0" cellspacing="0"
                                    style="width: 1175px;">
                                    <colgroup>
                                        <col name="el-table_8_column_72" width="55">
                                        <col name="el-table_8_column_73" width="80">
                                        <col name="el-table_8_column_74" width="80">
                                        <col name="el-table_8_column_75" width="80">
                                        <col name="el-table_8_column_76" width="80">
                                        <col name="el-table_8_column_77" width="80">
                                        <col name="el-table_8_column_78" width="120">
                                        <col name="el-table_8_column_79" width="80">
                                        <col name="el-table_8_column_80" width="80">
                                        <col name="el-table_8_column_81" width="120">
                                        <col name="el-table_8_column_82" width="80">
                                        <col name="el-table_8_column_83" width="80">
                                        <col name="el-table_8_column_84" width="160">
                                    </colgroup>
                                    <thead class="">
                                        <tr class="">
                                            <th class="el-table_8_column_72 is-center el-table-column--selection is-leaf el-table__cell"
                                                colspan="1" rowspan="1">
                                                <div class="cell"><label class="el-checkbox"><span
                                                            class="el-checkbox__input"><input
                                                                class="el-checkbox__original" type="checkbox"
                                                                id="el-id-2142-300"><span
                                                                class="el-checkbox__inner"></span></span><!--v-if--></label><!----><!---->
                                                </div>
                                            </th>
                                            <th class="el-table_8_column_73 is-leaf el-table__cell" colspan="1"
                                                rowspan="1">
                                                <div class="cell">设备图片<!----><!----></div>
                                            </th>
                                            <th class="el-table_8_column_74 is-leaf el-table__cell" colspan="1"
                                                rowspan="1">
                                                <div class="cell">设备名称<!----><!----></div>
                                            </th>
                                            <th class="el-table_8_column_75 is-leaf el-table__cell" colspan="1"
                                                rowspan="1">
                                                <div class="cell">设备编号<!----><!----></div>
                                            </th>
                                            <th class="el-table_8_column_76 is-leaf el-table__cell" colspan="1"
                                                rowspan="1">
                                                <div class="cell">所属学院<!----><!----></div>
                                            </th>
                                            <th class="el-table_8_column_77 is-leaf el-table__cell" colspan="1"
                                                rowspan="1">
                                                <div class="cell">所属实验室<!----><!----></div>
                                            </th>
                                            <th class="el-table_8_column_78 is-leaf el-table__cell" colspan="1"
                                                rowspan="1">
                                                <div class="cell">设备使用介绍<!----><!----></div>
                                            </th>
                                            <th class="el-table_8_column_79 is-leaf el-table__cell" colspan="1"
                                                rowspan="1">
                                                <div class="cell">生产厂商<!----><!----></div>
                                            </th>
                                            <th class="el-table_8_column_80 is-leaf el-table__cell" colspan="1"
                                                rowspan="1">
                                                <div class="cell">采购金额(元)<!----><!----></div>
                                            </th>
                                            <th class="el-table_8_column_81 is-leaf el-table__cell" colspan="1"
                                                rowspan="1">
                                                <div class="cell">采购日期<!----><!----></div>
                                            </th>
                                            <th class="el-table_8_column_82 is-leaf el-table__cell" colspan="1"
                                                rowspan="1">
                                                <div class="cell">采购负责人<!----><!----></div>
                                            </th>
                                            <th class="el-table_8_column_83 is-leaf el-table__cell" colspan="1"
                                                rowspan="1">
                                                <div class="cell">设备状态<!----><!----></div>
                                            </th>
                                            <th class="el-table_8_column_84 is-center el-table-fixed-column--right is-first-column is-leaf el-table__cell"
                                                colspan="1" rowspan="1" style="right: 0px;">
                                                <div class="cell">操作<!----><!----></div>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div class="el-table__body-wrapper">
                                <div class="el-scrollbar">
                                    <div class="el-scrollbar__wrap el-scrollbar__wrap--hidden-default">
                                        <div class="el-scrollbar__view"
                                            style="display: inline-block; vertical-align: middle;">
                                            <table class="el-table__body" cellspacing="0" cellpadding="0" border="0"
                                                style="table-layout: fixed; width: 1175px;">
                                                <colgroup>
                                                    <col name="el-table_8_column_72" width="55">
                                                    <col name="el-table_8_column_73" width="80">
                                                    <col name="el-table_8_column_74" width="80">
                                                    <col name="el-table_8_column_75" width="80">
                                                    <col name="el-table_8_column_76" width="80">
                                                    <col name="el-table_8_column_77" width="80">
                                                    <col name="el-table_8_column_78" width="120">
                                                    <col name="el-table_8_column_79" width="80">
                                                    <col name="el-table_8_column_80" width="80">
                                                    <col name="el-table_8_column_81" width="120">
                                                    <col name="el-table_8_column_82" width="80">
                                                    <col name="el-table_8_column_83" width="80">
                                                    <col name="el-table_8_column_84" width="160">
                                                </colgroup><!--v-if-->
                                                <tbody tabindex="-1">
                                                    <tr class="el-table__row">
                                                        <td class="el-table_8_column_72 is-center el-table-column--selection el-table__cell"
                                                            rowspan="1" colspan="1">
                                                            <div class="cell"><!----><label class="el-checkbox"><span
                                                                        class="el-checkbox__input"><input
                                                                            class="el-checkbox__original"
                                                                            type="checkbox" id="el-id-2142-304"><span
                                                                            class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_73 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->
                                                                <div class="el-image"
                                                                    style="width: 40px; height: 40px; display: block;">
                                                                    <img src="http://49.234.52.28:9098/files/download/1717744339770-交换机.png"
                                                                        class="el-image__inner el-image__preview"><!--v-if--><!--v-if-->
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_74 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->交换机</div>
                                                        </td>
                                                        <td class="el-table_8_column_75 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->js-jh012-004</div>
                                                        </td>
                                                        <td class="el-table_8_column_76 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->物理应用学院</div>
                                                        </td>
                                                        <td class="el-table_8_column_77 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->物理实验室01</div>
                                                        </td>
                                                        <td class="el-table_8_column_78 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">查看详情</span></button></div>
                                                        </td>
                                                        <td class="el-table_8_column_79 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell el-tooltip" style="width: 78px;">
                                                                <!---->上海物理仪器生产有限公司
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_80 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->10000</div>
                                                        </td>
                                                        <td class="el-table_8_column_81 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->2024-06-06</div>
                                                        </td>
                                                        <td class="el-table_8_column_82 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->王大锤</div>
                                                        </td>
                                                        <td class="el-table_8_column_83 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><span
                                                                    class="el-tag el-tag--success el-tag--light"><span
                                                                        class="el-tag__content">空闲中</span><!--v-if--></span><!----><!---->
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_84 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                            rowspan="1" colspan="1" style="right: 0px;">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">编辑</span></button><button
                                                                    aria-disabled="false" type="button"
                                                                    class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                        class="">删除</span></button></div>
                                                        </td>
                                                    </tr>
                                                    <tr class="el-table__row">
                                                        <td class="el-table_8_column_72 is-center el-table-column--selection el-table__cell"
                                                            rowspan="1" colspan="1">
                                                            <div class="cell"><!----><label class="el-checkbox"><span
                                                                        class="el-checkbox__input"><input
                                                                            class="el-checkbox__original"
                                                                            type="checkbox" id="el-id-2142-305"><span
                                                                            class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_73 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->
                                                                <div class="el-image"
                                                                    style="width: 40px; height: 40px; display: block;">
                                                                    <img src="http://49.234.52.28:9098/files/download/1717732738033-生物培养基.jpg"
                                                                        class="el-image__inner el-image__preview"><!--v-if--><!--v-if-->
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_74 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->微生物培养基02</div>
                                                        </td>
                                                        <td class="el-table_8_column_75 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->sw-pyj012-002</div>
                                                        </td>
                                                        <td class="el-table_8_column_76 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->生物学院</div>
                                                        </td>
                                                        <td class="el-table_8_column_77 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->生物实验室01</div>
                                                        </td>
                                                        <td class="el-table_8_column_78 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">查看详情</span></button></div>
                                                        </td>
                                                        <td class="el-table_8_column_79 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell el-tooltip" style="width: 78px;">
                                                                <!---->上海生物仪器生产有限公司
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_80 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->100</div>
                                                        </td>
                                                        <td class="el-table_8_column_81 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->2024-06-05</div>
                                                        </td>
                                                        <td class="el-table_8_column_82 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->admin</div>
                                                        </td>
                                                        <td class="el-table_8_column_83 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><!----><!----><span
                                                                    class="el-tag el-tag--warning el-tag--light"><span
                                                                        class="el-tag__content">维修中</span><!--v-if--></span>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_84 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                            rowspan="1" colspan="1" style="right: 0px;">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">编辑</span></button><button
                                                                    aria-disabled="false" type="button"
                                                                    class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                        class="">删除</span></button></div>
                                                        </td>
                                                    </tr>
                                                    <tr class="el-table__row">
                                                        <td class="el-table_8_column_72 is-center el-table-column--selection el-table__cell"
                                                            rowspan="1" colspan="1">
                                                            <div class="cell"><!----><label class="el-checkbox"><span
                                                                        class="el-checkbox__input"><input
                                                                            class="el-checkbox__original"
                                                                            type="checkbox" id="el-id-2142-306"><span
                                                                            class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_73 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->
                                                                <div class="el-image"
                                                                    style="width: 40px; height: 40px; display: block;">
                                                                    <img src="http://49.234.52.28:9098/files/download/1717732588191-弹簧秤.jpg"
                                                                        class="el-image__inner el-image__preview"><!--v-if--><!--v-if-->
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_74 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->弹簧秤01</div>
                                                        </td>
                                                        <td class="el-table_8_column_75 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->wl-th012-001</div>
                                                        </td>
                                                        <td class="el-table_8_column_76 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->物理应用学院</div>
                                                        </td>
                                                        <td class="el-table_8_column_77 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->物理实验室02</div>
                                                        </td>
                                                        <td class="el-table_8_column_78 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">查看详情</span></button></div>
                                                        </td>
                                                        <td class="el-table_8_column_79 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell el-tooltip" style="width: 78px;">
                                                                <!---->上海物理仪器生产有限公司
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_80 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->1000</div>
                                                        </td>
                                                        <td class="el-table_8_column_81 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->2024-06-06</div>
                                                        </td>
                                                        <td class="el-table_8_column_82 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->admin</div>
                                                        </td>
                                                        <td class="el-table_8_column_83 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><!----><!----><span
                                                                    class="el-tag el-tag--warning el-tag--light"><span
                                                                        class="el-tag__content">维修中</span><!--v-if--></span>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_84 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                            rowspan="1" colspan="1" style="right: 0px;">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">编辑</span></button><button
                                                                    aria-disabled="false" type="button"
                                                                    class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                        class="">删除</span></button></div>
                                                        </td>
                                                    </tr>
                                                    <tr class="el-table__row">
                                                        <td class="el-table_8_column_72 is-center el-table-column--selection el-table__cell"
                                                            rowspan="1" colspan="1">
                                                            <div class="cell"><!----><label class="el-checkbox"><span
                                                                        class="el-checkbox__input"><input
                                                                            class="el-checkbox__original"
                                                                            type="checkbox" id="el-id-2142-307"><span
                                                                            class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_73 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->
                                                                <div class="el-image"
                                                                    style="width: 40px; height: 40px; display: block;">
                                                                    <img src="http://49.234.52.28:9098/files/download/1717732418609-物理支架.jpg"
                                                                        class="el-image__inner el-image__preview"><!--v-if--><!--v-if-->
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_74 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->物理支架01</div>
                                                        </td>
                                                        <td class="el-table_8_column_75 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->wl-zj012-001</div>
                                                        </td>
                                                        <td class="el-table_8_column_76 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->物理应用学院</div>
                                                        </td>
                                                        <td class="el-table_8_column_77 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->物理实验室01</div>
                                                        </td>
                                                        <td class="el-table_8_column_78 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">查看详情</span></button></div>
                                                        </td>
                                                        <td class="el-table_8_column_79 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell el-tooltip" style="width: 78px;">
                                                                <!---->上海物理仪器生产有限公司
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_80 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->10000</div>
                                                        </td>
                                                        <td class="el-table_8_column_81 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->2024-06-06</div>
                                                        </td>
                                                        <td class="el-table_8_column_82 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->admin</div>
                                                        </td>
                                                        <td class="el-table_8_column_83 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><!----><!----><span
                                                                    class="el-tag el-tag--warning el-tag--light"><span
                                                                        class="el-tag__content">维修中</span><!--v-if--></span>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_84 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                            rowspan="1" colspan="1" style="right: 0px;">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">编辑</span></button><button
                                                                    aria-disabled="false" type="button"
                                                                    class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                        class="">删除</span></button></div>
                                                        </td>
                                                    </tr>
                                                    <tr class="el-table__row">
                                                        <td class="el-table_8_column_72 is-center el-table-column--selection el-table__cell"
                                                            rowspan="1" colspan="1">
                                                            <div class="cell"><!----><label class="el-checkbox"><span
                                                                        class="el-checkbox__input"><input
                                                                            class="el-checkbox__original"
                                                                            type="checkbox" id="el-id-2142-308"><span
                                                                            class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_73 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->
                                                                <div class="el-image"
                                                                    style="width: 40px; height: 40px; display: block;">
                                                                    <img src="http://49.234.52.28:9098/files/download/1717732191878-华为电脑.jpg"
                                                                        class="el-image__inner el-image__preview"><!--v-if--><!--v-if-->
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_74 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->华为电脑</div>
                                                        </td>
                                                        <td class="el-table_8_column_75 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->dn-014-001</div>
                                                        </td>
                                                        <td class="el-table_8_column_76 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->物理应用学院</div>
                                                        </td>
                                                        <td class="el-table_8_column_77 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->物理实验室02</div>
                                                        </td>
                                                        <td class="el-table_8_column_78 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">查看详情</span></button></div>
                                                        </td>
                                                        <td class="el-table_8_column_79 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell el-tooltip" style="width: 78px;">
                                                                <!---->上海华为电脑生产有限公司
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_80 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->10000</div>
                                                        </td>
                                                        <td class="el-table_8_column_81 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->2024-06-06</div>
                                                        </td>
                                                        <td class="el-table_8_column_82 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->admin</div>
                                                        </td>
                                                        <td class="el-table_8_column_83 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><!----><!----><span
                                                                    class="el-tag el-tag--warning el-tag--light"><span
                                                                        class="el-tag__content">维修中</span><!--v-if--></span>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_84 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                            rowspan="1" colspan="1" style="right: 0px;">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">编辑</span></button><button
                                                                    aria-disabled="false" type="button"
                                                                    class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                        class="">删除</span></button></div>
                                                        </td>
                                                    </tr>
                                                    <tr class="el-table__row">
                                                        <td class="el-table_8_column_72 is-center el-table-column--selection el-table__cell"
                                                            rowspan="1" colspan="1">
                                                            <div class="cell"><!----><label class="el-checkbox"><span
                                                                        class="el-checkbox__input"><input
                                                                            class="el-checkbox__original"
                                                                            type="checkbox" id="el-id-2142-309"><span
                                                                            class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_73 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->
                                                                <div class="el-image"
                                                                    style="width: 40px; height: 40px; display: block;">
                                                                    <img src="http://49.234.52.28:9098/files/download/1717732137260-电压表.jpg"
                                                                        class="el-image__inner el-image__preview"><!--v-if--><!--v-if-->
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_74 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->电压表02</div>
                                                        </td>
                                                        <td class="el-table_8_column_75 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->wl-dy012-002</div>
                                                        </td>
                                                        <td class="el-table_8_column_76 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->物理应用学院</div>
                                                        </td>
                                                        <td class="el-table_8_column_77 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->物理实验室02</div>
                                                        </td>
                                                        <td class="el-table_8_column_78 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">查看详情</span></button></div>
                                                        </td>
                                                        <td class="el-table_8_column_79 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell el-tooltip" style="width: 78px;">
                                                                <!---->上海物理仪器生产有限公司
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_80 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->10000</div>
                                                        </td>
                                                        <td class="el-table_8_column_81 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->2024-06-06</div>
                                                        </td>
                                                        <td class="el-table_8_column_82 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->admin</div>
                                                        </td>
                                                        <td class="el-table_8_column_83 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><span
                                                                    class="el-tag el-tag--success el-tag--light"><span
                                                                        class="el-tag__content">空闲中</span><!--v-if--></span><!----><!---->
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_84 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                            rowspan="1" colspan="1" style="right: 0px;">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">编辑</span></button><button
                                                                    aria-disabled="false" type="button"
                                                                    class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                        class="">删除</span></button></div>
                                                        </td>
                                                    </tr>
                                                    <tr class="el-table__row">
                                                        <td class="el-table_8_column_72 is-center el-table-column--selection el-table__cell"
                                                            rowspan="1" colspan="1">
                                                            <div class="cell"><!----><label class="el-checkbox"><span
                                                                        class="el-checkbox__input"><input
                                                                            class="el-checkbox__original"
                                                                            type="checkbox" id="el-id-2142-310"><span
                                                                            class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_73 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->
                                                                <div class="el-image"
                                                                    style="width: 40px; height: 40px; display: block;">
                                                                    <img src="http://49.234.52.28:9098/files/download/1717732032924-交换机.png"
                                                                        class="el-image__inner el-image__preview"><!--v-if--><!--v-if-->
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_74 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->交换机</div>
                                                        </td>
                                                        <td class="el-table_8_column_75 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->js-jh012-003</div>
                                                        </td>
                                                        <td class="el-table_8_column_76 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->电子与信息工程学院</div>
                                                        </td>
                                                        <td class="el-table_8_column_77 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->计算机实验室01</div>
                                                        </td>
                                                        <td class="el-table_8_column_78 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">查看详情</span></button></div>
                                                        </td>
                                                        <td class="el-table_8_column_79 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell el-tooltip" style="width: 78px;">
                                                                <!---->上海交换机生产有限公司
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_80 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->10000</div>
                                                        </td>
                                                        <td class="el-table_8_column_81 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->2024-06-06</div>
                                                        </td>
                                                        <td class="el-table_8_column_82 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->admin</div>
                                                        </td>
                                                        <td class="el-table_8_column_83 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><span
                                                                    class="el-tag el-tag--success el-tag--light"><span
                                                                        class="el-tag__content">空闲中</span><!--v-if--></span><!----><!---->
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_84 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                            rowspan="1" colspan="1" style="right: 0px;">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">编辑</span></button><button
                                                                    aria-disabled="false" type="button"
                                                                    class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                        class="">删除</span></button></div>
                                                        </td>
                                                    </tr>
                                                    <tr class="el-table__row">
                                                        <td class="el-table_8_column_72 is-center el-table-column--selection el-table__cell"
                                                            rowspan="1" colspan="1">
                                                            <div class="cell"><!----><label class="el-checkbox"><span
                                                                        class="el-checkbox__input"><input
                                                                            class="el-checkbox__original"
                                                                            type="checkbox" id="el-id-2142-311"><span
                                                                            class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_73 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->
                                                                <div class="el-image"
                                                                    style="width: 40px; height: 40px; display: block;">
                                                                    <img src="http://49.234.52.28:9098/files/download/1717731965581-交换机.png"
                                                                        class="el-image__inner el-image__preview"><!--v-if--><!--v-if-->
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_74 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->交换机</div>
                                                        </td>
                                                        <td class="el-table_8_column_75 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->js-jh012-002</div>
                                                        </td>
                                                        <td class="el-table_8_column_76 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->电子与信息工程学院</div>
                                                        </td>
                                                        <td class="el-table_8_column_77 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->电子与信息工程实验室01</div>
                                                        </td>
                                                        <td class="el-table_8_column_78 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">查看详情</span></button></div>
                                                        </td>
                                                        <td class="el-table_8_column_79 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell el-tooltip" style="width: 78px;">
                                                                <!---->上海交换机生产有限公司
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_80 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->10000</div>
                                                        </td>
                                                        <td class="el-table_8_column_81 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->2024-06-06</div>
                                                        </td>
                                                        <td class="el-table_8_column_82 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->admin</div>
                                                        </td>
                                                        <td class="el-table_8_column_83 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><!----><!----><span
                                                                    class="el-tag el-tag--warning el-tag--light"><span
                                                                        class="el-tag__content">维修中</span><!--v-if--></span>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_84 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                            rowspan="1" colspan="1" style="right: 0px;">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">编辑</span></button><button
                                                                    aria-disabled="false" type="button"
                                                                    class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                        class="">删除</span></button></div>
                                                        </td>
                                                    </tr>
                                                    <tr class="el-table__row">
                                                        <td class="el-table_8_column_72 is-center el-table-column--selection el-table__cell"
                                                            rowspan="1" colspan="1">
                                                            <div class="cell"><!----><label class="el-checkbox"><span
                                                                        class="el-checkbox__input"><input
                                                                            class="el-checkbox__original"
                                                                            type="checkbox" id="el-id-2142-312"><span
                                                                            class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_73 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->
                                                                <div class="el-image"
                                                                    style="width: 40px; height: 40px; display: block;">
                                                                    <img src="http://49.234.52.28:9098/files/download/1717727211326-交换机.png"
                                                                        class="el-image__inner el-image__preview"><!--v-if--><!--v-if-->
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_74 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->交换机</div>
                                                        </td>
                                                        <td class="el-table_8_column_75 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->js-jh012-001</div>
                                                        </td>
                                                        <td class="el-table_8_column_76 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->电子与信息工程学院</div>
                                                        </td>
                                                        <td class="el-table_8_column_77 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->计算机实验室02</div>
                                                        </td>
                                                        <td class="el-table_8_column_78 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">查看详情</span></button></div>
                                                        </td>
                                                        <td class="el-table_8_column_79 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell el-tooltip" style="width: 78px;">
                                                                <!---->上海交换机生产有限公司
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_80 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->10000</div>
                                                        </td>
                                                        <td class="el-table_8_column_81 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->2024-06-06</div>
                                                        </td>
                                                        <td class="el-table_8_column_82 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->admin</div>
                                                        </td>
                                                        <td class="el-table_8_column_83 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><!----><span
                                                                    class="el-tag el-tag--primary el-tag--light"><span
                                                                        class="el-tag__content">使用中</span><!--v-if--></span><!---->
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_84 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                            rowspan="1" colspan="1" style="right: 0px;">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">编辑</span></button><button
                                                                    aria-disabled="false" type="button"
                                                                    class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                        class="">删除</span></button></div>
                                                        </td>
                                                    </tr>
                                                    <tr class="el-table__row">
                                                        <td class="el-table_8_column_72 is-center el-table-column--selection el-table__cell"
                                                            rowspan="1" colspan="1">
                                                            <div class="cell"><!----><label class="el-checkbox"><span
                                                                        class="el-checkbox__input"><input
                                                                            class="el-checkbox__original"
                                                                            type="checkbox" id="el-id-2142-313"><span
                                                                            class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_73 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->
                                                                <div class="el-image"
                                                                    style="width: 40px; height: 40px; display: block;">
                                                                    <img src="http://49.234.52.28:9098/files/download/1717724149657-3D打印机.jpg"
                                                                        class="el-image__inner el-image__preview"><!--v-if--><!--v-if-->
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_74 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->3D打印机</div>
                                                        </td>
                                                        <td class="el-table_8_column_75 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->3d-dy012-003</div>
                                                        </td>
                                                        <td class="el-table_8_column_76 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->电子与信息工程学院</div>
                                                        </td>
                                                        <td class="el-table_8_column_77 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->计算机实验室02</div>
                                                        </td>
                                                        <td class="el-table_8_column_78 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">查看详情</span></button></div>
                                                        </td>
                                                        <td class="el-table_8_column_79 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell el-tooltip" style="width: 78px;">
                                                                <!---->芜湖3D打印机生产有限公司
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_80 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->10000</div>
                                                        </td>
                                                        <td class="el-table_8_column_81 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->2024-06-06</div>
                                                        </td>
                                                        <td class="el-table_8_column_82 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!---->admin</div>
                                                        </td>
                                                        <td class="el-table_8_column_83 el-table__cell" rowspan="1"
                                                            colspan="1">
                                                            <div class="cell"><!----><!----><!----><span
                                                                    class="el-tag el-tag--warning el-tag--light"><span
                                                                        class="el-tag__content">维修中</span><!--v-if--></span>
                                                            </div>
                                                        </td>
                                                        <td class="el-table_8_column_84 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                            rowspan="1" colspan="1" style="right: 0px;">
                                                            <div class="cell"><!----><button aria-disabled="false"
                                                                    type="button"
                                                                    class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                        class="">编辑</span></button><button
                                                                    aria-disabled="false" type="button"
                                                                    class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                        class="">删除</span></button></div>
                                                        </td>
                                                    </tr>
                                                </tbody><!--v-if-->
                                            </table><!--v-if--><!--v-if-->
                                        </div>
                                    </div>
                                    <div class="el-scrollbar__bar is-horizontal" style="display: none;">
                                        <div class="el-scrollbar__thumb"
                                            style="transform: translateX(0%); width: 1121.62px;"></div>
                                    </div>
                                    <div class="el-scrollbar__bar is-vertical" style="display: none;">
                                        <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                                    </div>
                                </div>
                            </div><!--v-if--><!--v-if-->
                        </div>
                        <div class="el-table__column-resize-proxy" style="display: none;"></div>
                    </div>
                </div>
                <div class="card">
                    <div class="el-pagination is-background"><button type="button" class="btn-prev is-first" disabled
                            aria-label="上一页" aria-disabled="true"><i class="el-icon"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                    <path fill="currentColor"
                                        d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z">
                                    </path>
                                </svg></i></button>
                        <ul class="el-pager">
                            <li class="is-active number" aria-current="true" aria-label="第 1 页" tabindex="0"> 1 </li>
                            <!--v-if-->
                            <li class="number" aria-current="false" aria-label="第 2 页" tabindex="0">2</li>
                            <li class="number" aria-current="false" aria-label="第 3 页" tabindex="0">3</li><!--v-if-->
                            <li class="number" aria-current="false" aria-label="第 4 页" tabindex="0">4</li>
                        </ul><button type="button" class="btn-next is-last" aria-label="下一页" aria-disabled="false"><i
                                class="el-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                    <path fill="currentColor"
                                        d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z">
                                    </path>
                                </svg></i></button>
                    </div>
                </div>
                <div class="el-overlay" style="z-index: 2044; display: none;">
                    <div role="dialog" aria-modal="true" aria-label="设备信息" aria-describedby="el-id-2142-295"
                        class="el-overlay-dialog"></div>
                </div>
                <div class="el-overlay" style="z-index: 2045; display: none;">
                    <div role="dialog" aria-modal="true" aria-label="设备使用详情" aria-describedby="el-id-2142-296"
                        class="el-overlay-dialog"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

// import '../assets/js/Equipment-1s162117.js'
</script>
<style scoped>
* {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
}


.manager-main-right {
    /* flex: 1; */
    /* width: 0; */
    background-color: #f8f8ff;
    padding: 10px;
}

.card {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 0 10px #0000001a;
}

.el-input {
    --el-input-height: var(--el-component-size);
    position: relative;
    font-size: var(--el-font-size-base);
    display: inline-flex;
    width: var(--el-input-width);
    line-height: var(--el-input-height);
    box-sizing: border-box;
    vertical-align: middle;
}

.el-input__wrapper {
    display: inline-flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 1px 11px;
    background-color: var(--el-input-bg-color, var(--el-fill-color-blank));
    background-image: none;
    border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
    cursor: text;
    transition: var(--el-transition-box-shadow);
    transform: translateZ(0);
    box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
}

.el-input__prefix {
    display: inline-flex;
    white-space: nowrap;
    flex-shrink: 0;
    flex-wrap: nowrap;
    height: 100%;
    text-align: center;
    color: var(--el-input-icon-color, var(--el-text-color-placeholder));
    transition: all var(--el-transition-duration);
    pointer-events: none;
}

.el-input__prefix-inner {
    pointer-events: all;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.el-icon svg {
    height: 1em;
    width: 1em;
}

.el-input__prefix-inner>:first-child,
.el-input__prefix-inner>:first-child.el-input__icon {
    margin-left: 0;
}

.el-input__inner {
    --el-input-inner-height: calc(var(--el-input-height, 32px) - 2px);
    width: 100%;
    flex-grow: 1;
    -webkit-appearance: none;
    color: var(--el-input-text-color, var(--el-text-color-regular));
    font-size: inherit;
    height: var(--el-input-inner-height);
    line-height: var(--el-input-inner-height);
    padding: 0;
    outline: none;
    border: none;
    background: none;
    box-sizing: border-box;
}

.el-select {
    --el-select-border-color-hover: var(--el-border-color-hover);
    --el-select-disabled-color: var(--el-disabled-text-color);
    --el-select-disabled-border: var(--el-disabled-border-color);
    --el-select-font-size: var(--el-font-size-base);
    --el-select-close-hover-color: var(--el-text-color-secondary);
    --el-select-input-color: var(--el-text-color-placeholder);
    --el-select-multiple-input-color: var(--el-text-color-regular);
    --el-select-input-focus-border-color: var(--el-color-primary);
    --el-select-input-font-size: 14px;
    --el-select-width: 100%;
}

.el-select__wrapper {
    display: flex;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    text-align: left;
    font-size: 14px;
    padding: 4px 12px;
    gap: 6px;
    min-height: 32px;
    line-height: 24px;
    border-radius: var(--el-border-radius-base);
    background-color: var(--el-fill-color-blank);
    transition: var(--el-transition-duration);
    box-shadow: 0 0 0 1px var(--el-border-color) inset;
}

.el-select__selection {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: 1;
    min-width: 0;
    gap: 6px;
}

.el-select__input-wrapper.is-hidden {
    position: absolute;
    opacity: 0;
}

.el-select__input {
    border: none;
    outline: none;
    padding: 0;
    color: var(--el-select-multiple-input-color);
    font-size: inherit;
    font-family: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 24px;
    max-width: 100%;
    background-color: transparent;
}

.el-select__prefix,
.el-select__suffix {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 6px;
    color: var(--el-input-icon-color, var(--el-text-color-placeholder));
}

.el-select__prefix,
.el-select__suffix {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 6px;
    color: var(--el-input-icon-color, var(--el-text-color-placeholder));
}

.el-icon svg {
    height: 1em;
    width: 1em;
}

.el-button--info.is-plain,
.el-button--info.is-text,
.el-button--info.is-link {
    --el-button-text-color: var(--el-color-info);
    --el-button-bg-color: var(--el-color-info-light-9);
    --el-button-border-color: var(--el-color-info-light-5);
    --el-button-hover-text-color: var(--el-color-white);
    --el-button-hover-bg-color: var(--el-color-info);
    --el-button-hover-border-color: var(--el-color-info);
    --el-button-active-text-color: var(--el-color-white);
}

.el-button>span {
    display: inline-flex;
    align-items: center;
}

.el-button--warning.is-plain,
.el-button--warning.is-text,
.el-button--warning.is-link {
    --el-button-text-color: var(--el-color-warning);
    --el-button-bg-color: var(--el-color-warning-light-9);
    --el-button-border-color: var(--el-color-warning-light-5);
    --el-button-hover-text-color: var(--el-color-white);
    --el-button-hover-bg-color: var(--el-color-warning);
    --el-button-hover-border-color: var(--el-color-warning);
    --el-button-active-text-color: var(--el-color-white);
}

.el-button>span {
    display: inline-flex;
    align-items: center;
}
</style>