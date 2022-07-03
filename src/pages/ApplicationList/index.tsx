import { candidate, exportCandidates } from '@/services/ant-design-pro/api';
import { DownloadOutlined, QqOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import { PageContainer, ProDescriptions, ProTable } from '@ant-design/pro-components';
import { Button, Drawer } from 'antd';
import React, { useRef, useState } from 'react';

const ApplicationList: React.FC = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.Candidate>();

  const columns: ProColumns<API.Candidate>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: '学号',
      dataIndex: 'studentId',
      valueType: 'textarea',
    },
    {
      title: '社团名称',
      dataIndex: 'club',
      renderText: (val: API.Club) => `${val.name}`,
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      hideInSearch: true,
    },
    {
      title: 'QQ',
      dataIndex: 'qq',
      hideInSearch: true,
      render: (text) => [
        `${text}`,
        <a
          key="show"
          href={`http://wpa.qq.com/msgrd?v=3&uin=${text}&menu=yes`}
          target="_blank"
          rel="noreferrer"
        >
          <QqOutlined />
        </a>,
      ],
    },
    {
      title: '辅导员',
      dataIndex: 'counselor',
      hideInSearch: true,
    },
    {
      title: '第一志愿',
      dataIndex: 'firstChoice',
      renderText: (val: API.Department) => `${val.name}`,
    },
    {
      title: '第二志愿',
      dataIndex: 'secondChoice',
      renderText: (val: API.Department) => `${val.name}`,
    },
    {
      title: '加入原因',
      dataIndex: 'reason',
      hideInSearch: true,
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.Candidate, API.PageParams>
        headerTitle="查询表格"
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              const fileName = Date.parse(new Date().toUTCString());
              exportCandidates()
                .then((res) => {
                  // TODO: 无法下载
                  const blob = new Blob([res], {
                    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                  });
                  const link = document.createElement('a');
                  link.href = URL.createObjectURL(blob);
                  link.download = `${fileName}.xlsx`;
                  link.click();
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            <DownloadOutlined /> 导出
          </Button>,
        ]}
        request={candidate}
        columns={columns}
      />

      <Drawer
        width={600}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.Candidate>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.Candidate>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default ApplicationList;
